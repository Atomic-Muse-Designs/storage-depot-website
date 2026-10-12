import { useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import { FAQS, PHOTOS, UHAUL_URL, type Unit } from "../lib/site";
import { Reveal } from "./layout";

export function Footprint({ sqft, className = "" }: { sqft: number; className?: string }) {
  const pct = (sqft / 200) * 100;
  return (
    <div className={`relative border border-dashed border-border ${className}`}>
      <div className="corrugate-amber absolute inset-x-0 bottom-0 opacity-30" style={{ height: `${pct}%`, ...(sqft === 50 ? { right: "50%" } : {}) }} />
      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[0.62rem] uppercase tracking-[0.14em] text-foreground/60">
        {sqft} sq ft
      </span>
    </div>
  );
}

export function UnitCard({ u, featured = false }: { u: Unit; featured?: boolean }) {
  return (
    <div className={`flex h-full flex-col border border-border bg-white p-7 ${featured ? "border-t-4 border-t-primary" : ""}`}>
      <div className="flex gap-4">
        <div className="flex-1">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">{u.label}</p>
          <p className="mt-3 font-display text-[2.6rem] font-bold leading-[0.95]">{u.dims}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {u.full} · {u.sqft} sq ft
          </p>
        </div>
        <Footprint sqft={u.sqft} className="h-36 w-[45%]" />
      </div>
      <div className="hairline my-6" />
      <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">Starting at</p>
      <p className="mt-1 flex items-baseline gap-1.5">
        <span className="font-display text-5xl font-bold">${u.price}</span>
        <span className="font-display text-sm uppercase tracking-wide text-muted-foreground">/ month</span>
      </p>
      <p className="mt-4 font-medium">{u.fits}</p>
      <ul className="mt-4 space-y-2 text-[0.92rem] text-muted-foreground">
        {u.items.map((i) => (
          <li key={i} className="flex gap-2">
            <Check className="mt-1 size-3.5 shrink-0 text-primary" />
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
            u.status === "low" ? "bg-destructive/10 text-destructive" : "bg-muted text-foreground/70"
          }`}
        >
          <span className={`size-1.5 rounded-full ${u.status === "low" ? "bg-destructive" : "bg-primary"}`} />
          {u.status === "low" ? "Only 2 left" : "Rent now online"}
        </span>
        <a href={UHAUL_URL} target="_blank" rel="noreferrer" className={`${featured ? "btn-amber" : "btn-outline-dark"} mt-5 w-full`}>
          Reserve {u.dims} <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

export function Faq({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(limit ? 0 : null);
  const items = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <div className="border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-border">
            <button className="flex w-full items-center justify-between gap-6 py-5 text-left" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span className="font-display text-xl font-medium uppercase md:text-[1.4rem]">{f.q}</span>
              <span className={`grid size-6 shrink-0 place-items-center border ${isOpen ? "border-primary bg-primary text-ink" : "border-foreground/40"}`}>
                {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden pr-10 leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (d: number) => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose, onMove]);
  const p = PHOTOS[index];
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-ink/95 p-4 md:p-10" aria-label="Photo viewer">
      <button aria-label="Close photo" className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="pointer-events-none relative flex items-center justify-between text-white">
        <span className="font-display text-sm uppercase tracking-[0.2em] text-white/60">
          {index + 1} / {PHOTOS.length} · <span className="text-white">{p.caption}</span>
        </span>
        <button aria-label="Close" className="pointer-events-auto" onClick={onClose}>
          <X className="size-7" />
        </button>
      </div>
      <div className="pointer-events-none relative flex min-h-0 flex-1 items-center justify-center py-6">
        <img src={p.src} alt={p.alt} className="pointer-events-auto max-h-full max-w-full object-contain" />
        <button aria-label="Previous" className="pointer-events-auto absolute left-0 grid size-12 place-items-center bg-white/10 text-white hover:bg-primary hover:text-ink" onClick={() => onMove(-1)}>
          <ChevronLeft />
        </button>
        <button aria-label="Next" className="pointer-events-auto absolute right-0 grid size-12 place-items-center bg-white/10 text-white hover:bg-primary hover:text-ink" onClick={() => onMove(1)}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

const SPANS_ALL = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];
const SPANS_SIX = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-4",
];

export function Gallery({ count = PHOTOS.length }: { count?: number }) {
  const [idx, setIdx] = useState<number | null>(null);
  const shown = PHOTOS.slice(0, count);
  const spans = count === 6 ? SPANS_SIX : SPANS_ALL;
  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[170px] grid-cols-2 gap-3 md:grid-cols-8 md:auto-rows-[190px]">
        {shown.map((p, i) => (
          <Reveal key={p.src} delay={(i % 4) * 70} className={`${spans[i] ?? "md:col-span-2"} ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === shown.length - 1 ? "col-span-2" : ""}`}>
            <button className="group relative block h-full w-full overflow-hidden bg-ink" onClick={() => setIdx(i)}>
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 text-left font-display text-sm uppercase tracking-[0.12em] text-white">{p.caption}</span>
            </button>
          </Reveal>
        ))}
      </div>
      {idx !== null && (
        <Lightbox index={idx} onClose={() => setIdx(null)} onMove={(d) => setIdx((v) => ((v ?? 0) + d + PHOTOS.length) % PHOTOS.length)} />
      )}
    </>
  );
}
