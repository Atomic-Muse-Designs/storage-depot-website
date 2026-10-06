import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { ADDRESS, CITY, HOURS, MAPS_URL, PHONE, PHONE_HREF, STREET, UHAUL_URL } from "../lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/units", label: "Units & Pricing" },
  { href: "/facility", label: "Facility & Security" },
  { href: "/contact", label: "Contact" },
];

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className={`corrugate-amber block ${small ? "h-7 w-2" : "h-8 w-2"}`} />
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-bold uppercase tracking-tight text-white">
          Storage Depot
        </span>
        <span className="block font-display text-[0.62rem] uppercase tracking-[0.22em] text-white/50">
          Alexander City, AL
        </span>
      </span>
    </Link>
  );
}

function Header() {
  const [loc] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [loc]);
  return (
    <>
      <div className="bg-ink text-white/70">
        <div className="shell flex h-8 items-center justify-between font-display text-[0.7rem] uppercase tracking-[0.18em]">
          <span className="hidden sm:inline">Climate-controlled indoor units · Managed by 3H Management</span>
          <span className="sm:hidden">Managed by 3H Management</span>
          <span>
            <span className="hidden md:inline">Office {HOURS.office} · </span>
            <span className="text-primary">24-hour access</span>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#17191b]/95 backdrop-blur">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => {
              const active = n.href === "/" ? loc === "/" : loc.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative py-1 font-display text-[0.9rem] uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {n.label}
                  {active && <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary" />}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className="hidden items-center gap-2 font-display text-[1.05rem] font-semibold tracking-wide text-white md:flex">
              <Phone className="size-4 text-primary" />
              {PHONE}
            </a>
            <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="btn-amber hidden !px-5 !py-2.5 !text-[0.95rem] sm:inline-flex">
              Reserve Online
            </a>
            <button className="text-white lg:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              {open ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-ink lg:hidden">
            <div className="shell flex flex-col py-4">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="border-b border-white/10 py-3.5 font-display text-lg uppercase tracking-[0.12em] text-white">
                  {n.label}
                </Link>
              ))}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href={PHONE_HREF} className="btn-outline-light !px-3">
                  <Phone className="size-4" /> Call
                </a>
                <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="btn-amber !px-3">
                  Reserve
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  position = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  image: string;
  position?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={image} alt="" className="slowzoom absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55 md:via-ink/70 md:to-ink/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      <div className="shell relative py-20 md:py-28">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="display-lg rise mt-5 max-w-3xl" style={{ animationDelay: "90ms" }}>
          {title}
        </h1>
        <p className="rise mt-6 max-w-xl text-lg font-light leading-relaxed text-white/80" style={{ animationDelay: "180ms" }}>
          {body}
        </p>
      </div>
      <div className="corrugate-amber absolute inset-x-0 bottom-0 h-1" />
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src="/images/building-length-v3.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div className="shell relative py-24">
        <Reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="display-lg mt-5 max-w-3xl">
            Lock in a unit
            <br />
            before it's gone
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light text-white/75">
            Units start at $75 a month and the smaller sizes go quickly. Reserve online in a couple of minutes, or call and
            we'll walk you through it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="btn-amber">
              Reserve Online <ArrowUpRight className="size-4" />
            </a>
            <a href={PHONE_HREF} className="btn-outline-light">
              <Phone className="size-4" /> {PHONE}
            </a>
          </div>
          <p className="mt-8 text-sm text-white/50">
            {ADDRESS} · Office {HOURS.office} · Access {HOURS.access}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-ink text-white/70">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">
            Clean, climate-controlled indoor storage in Alexander City. Units from $75 a month, reserved online or over the
            phone.
          </p>
        </div>
        <div>
          <p className="eyebrow">Visit</p>
          <ul className="mt-5 space-y-3.5 text-[0.95rem]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-white">
                {STREET}
                <br />
                {CITY}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={PHONE_HREF} className="hover:text-white">
                {PHONE}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                Office: {HOURS.office}
                <br />
                {HOURS.officeWeekend}
                <br />
                Access: {HOURS.access}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Site</p>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="text-primary hover:text-[#ffab24]">
                Reserve a unit online
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Managed by</p>
          <div className="mt-5 border border-white/15 p-5">
            <p className="font-display text-xl font-semibold uppercase text-white">3H Management</p>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-white/45">Property management</p>
            <p className="mt-4 text-[0.92rem] leading-relaxed">
              Storage Depot is owned and operated locally and managed by 3H Management, the same team behind residential
              communities across central Alabama.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-white/45 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Storage Depot. Managed by 3H Management. All rights reserved.</span>
          <span>Independently owned and operated · Part of the U-Haul Self-Storage Affiliate Network</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [loc] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc]);
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
