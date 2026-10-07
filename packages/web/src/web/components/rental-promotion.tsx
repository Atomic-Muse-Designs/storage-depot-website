import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { UHAUL_URL } from "../lib/site";

export function RentalPromotion() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const controls = dialog.querySelectorAll<HTMLElement>("button, a[href]");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    dialog.addEventListener("keydown", trapFocus);
    return () => {
      dialog.removeEventListener("keydown", trapFocus);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function dismiss() {
    setIsOpen(false);
  }

  return (
    <dialog
      ref={dialogRef}
      className="rental-promotion"
      aria-labelledby="promotion-title"
      aria-describedby="promotion-subtitle promotion-description promotion-terms promotion-claim"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClose={() => setIsOpen(false)}
    >
      <button ref={closeRef} type="button" className="promotion-close" aria-label="Close promotion" onClick={dismiss}>
        <X size={21} aria-hidden="true" />
      </button>
      <div className="promotion-grid">
        <div className="promotion-offer">
          <p className="eyebrow">Storage Depot</p>
          <div className="promotion-rule" />
          <h2 id="promotion-title">
            <span className="promotion-discount">50% <span>Off</span></span>{" "}
            <span className="promotion-headline">Your Second <br />Month’s Rent</span>
          </h2>
        </div>
        <div className="promotion-action">
          <p id="promotion-subtitle" className="promotion-subtitle">For the First 10 Customers Only</p>
          <p id="promotion-description" className="promotion-description">Reserve your storage unit today and save 50% on your second month.</p>
          <a href={UHAUL_URL} className="btn-amber promotion-rent" target="_blank" rel="noopener noreferrer" onClick={dismiss}>
            Rent a Unit <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <button type="button" className="promotion-decline" onClick={dismiss}>No thanks</button>
          <p id="promotion-terms" className="promotion-terms">Offer valid for the first 10 customers only. Subject to unit availability. Restrictions may apply.</p>
          <p id="promotion-claim" className="promotion-claim">After reserving your unit, please call or visit the office and mention this special to claim your discount.</p>
        </div>
      </div>
    </dialog>
  );
}