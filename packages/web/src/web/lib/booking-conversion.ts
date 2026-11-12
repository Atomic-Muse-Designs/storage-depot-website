import { UHAUL_URL } from "./site";

const SEND_TO = "AW-18517739150/84vMCLeFp7cdEI6N-f1E";
const NAVIGATION_TIMEOUT = 1000;
type ConversionParams = {
  send_to: string;
  event_callback?: () => void;
  event_timeout?: number;
};
type Gtag = (command: "event", name: "conversion", params: ConversionParams) => void;
type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
};

/** Use the already configured GTM Google Ads destination; never load another tag. */
function sendConversion(params: ConversionParams) {
  const tracking = window as TrackingWindow;
  tracking.dataLayer ??= [];
  tracking.gtag ??= function () {
    // Google processes the standard gtag Arguments format from the shared layer.
    tracking.dataLayer!.push(arguments);
  };
  tracking.gtag("event", "conversion", params);
}

/** One delegated listener also covers mobile, unit cards and dynamically shown CTAs. */
export function installBookingConversionTracking() {
  const activate = (event: MouseEvent) => {
    if (event.defaultPrevented) return;
    if (event.type === "click" && event.button !== 0) return;
    if (event.type === "auxclick" && event.button !== 1) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest<HTMLAnchorElement>("a[href]");
    if (!link || link.hasAttribute("download")) return;
    const url = new URL(link.href, document.baseURI);
    const booking = new URL(UHAUL_URL);
    if (url.origin !== booking.origin || url.pathname !== booking.pathname) return;

    const modified = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
    const destination = (link.getAttribute("target") ?? "_self").toLowerCase();
    const sameTab = event.type === "click" && !modified && destination === "_self";
    if (!sameTab) {
      // Let the browser open new tabs/windows normally (including middle click).
      try {
        sendConversion({ send_to: SEND_TO });
      } catch {
        // Booking navigation must never depend on analytics availability.
      }
      return;
    }

    event.preventDefault();
    let navigated = false;
    let timeout: ReturnType<typeof window.setTimeout>;
    const navigate = () => {
      if (navigated) return;
      navigated = true;
      window.clearTimeout(timeout);
      window.location.assign(link.href);
    };
    timeout = window.setTimeout(navigate, NAVIGATION_TIMEOUT);
    try {
      sendConversion({
        send_to: SEND_TO,
        event_callback: navigate,
        event_timeout: NAVIGATION_TIMEOUT,
      });
    } catch {
      navigate();
    }
  };

  document.addEventListener("click", activate, true);
  document.addEventListener("auxclick", activate, true);
  return () => {
    document.removeEventListener("click", activate, true);
    document.removeEventListener("auxclick", activate, true);
  };
}