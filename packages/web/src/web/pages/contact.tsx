import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowUpRight, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { Layout, PageHero, Reveal } from "../components/layout";
import { Faq } from "../components/blocks";
import { orpc } from "../lib/api";
import { CITY, HOURS, MAPS_EMBED, MAPS_URL, PHONE, PHONE_HREF, STREET, UHAUL_URL, UNITS } from "../lib/site";
import { usePageMeta } from "../hooks/use-page-meta";

const field = "mt-2 w-full font-sans text-foreground normal-case tracking-normal font-normal border border-input bg-white px-3.5 py-3 text-[0.95rem] outline-none transition focus:border-primary";
const label = "font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground";

function InquiryForm() {
  const [sent, setSent] = useState(false);
  const m = useMutation(orpc.inquiries.create.mutationOptions({ onSuccess: () => setSent(true) }));
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => (f.get(k) as string)?.trim() || undefined;
    m.mutate({ name: v("name") ?? "", email: v("email") ?? "", phone: v("phone"), size: v("size"), timing: v("timing"), message: v("message") });
  };
  if (sent)
    return (
      <div className="flex h-full flex-col items-start justify-center border border-border bg-white p-10">
        <CheckCircle2 className="size-10 text-primary" />
        <h2 className="mt-5 text-3xl font-bold">Message sent</h2>
        <p className="mt-3 text-muted-foreground">
          Thanks, we'll get back to you during office hours ({HOURS.office}). Need a unit right now?{" "}
          <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="text-foreground underline">
            Reserve online
          </a>
          .
        </p>
      </div>
    );
  return (
    <form onSubmit={submit} className="border border-border bg-white p-7 md:p-9">
      <h2 className="text-3xl font-bold">Ask about a unit</h2>
      <p className="mt-2 text-muted-foreground">Send us what you're storing and when you need it. We'll come back with the right size and today's rate.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Name *
          <input name="name" aria-label="Name" required className={field} />
        </label>
        <label className={label}>
          Email *
          <input name="email" aria-label="Email" type="email" required className={field} />
        </label>
        <label className={label}>
          Phone
          <input name="phone" aria-label="Phone" type="tel" className={field} />
        </label>
        <label className={label}>
          Size you're considering
          <select name="size" aria-label="Size" className={field} defaultValue="Not sure yet">
            <option>Not sure yet</option>
            {UNITS.map((u) => (
              <option key={u.dims}>
                {u.dims} - ${u.price}/mo
              </option>
            ))}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          When do you need it?
          <input name="timing" aria-label="When do you need it" placeholder="e.g. this weekend, first of next month" className={field} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          What are you storing?
          <textarea name="message" aria-label="What are you storing" rows={4} className={field} />
        </label>
      </div>
      {m.isError && <p className="mt-4 text-sm text-destructive">Something went wrong sending that. Please call {PHONE}.</p>}
      <button disabled={m.isPending} className="btn-amber mt-7 w-full disabled:opacity-60">
        {m.isPending ? "Sending…" : "Send message"}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">Need a unit today? Reserving online is instant. The form is for questions.</p>
    </form>
  );
}

export default function Contact() {
  usePageMeta(
    "Contact & Location | Storage Depot Alexander City, AL",
    "Visit or contact Storage Depot at 277 Joseph Street, Alexander City, AL 35010. Call (256) 369-1198 or get directions.",
  );
  return (
    <Layout>
      <PageHero
        eyebrow="Contact & FAQ"
        title="Talk to a local team"
        body={`Call ${PHONE} during office hours, send a message, or reserve online any time. Storage Depot is managed locally by 3H Management, so you'll be talking to someone who knows the building.`}
        image="/images/loading-pad-v3.jpg"
      />

      <section className="py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <InquiryForm />
          </Reveal>
          <Reveal delay={100} className="flex flex-col border border-border bg-white">
            <a href={PHONE_HREF} className="flex gap-4 border-b border-border p-7 transition hover:bg-concrete">
              <Phone className="mt-0.5 size-5 text-primary" />
              <span>
                <span className={label}>Call the office</span>
                <span className="mt-2 block font-display text-3xl font-semibold">{PHONE}</span>
                <span className="text-sm text-muted-foreground">Fastest way to get a real answer</span>
              </span>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex gap-4 border-b border-border p-7 transition hover:bg-concrete">
              <MapPin className="mt-0.5 size-5 text-primary" />
              <span>
                <span className={label}>Visit</span>
                <span className="mt-2 block font-display text-2xl font-semibold uppercase leading-tight">
                  {STREET}
                  <br />
                  {CITY}
                </span>
                <span className="text-sm text-muted-foreground underline">Get directions</span>
              </span>
            </a>
            <div className="flex gap-4 border-b border-border p-7">
              <Clock className="mt-0.5 size-5 text-primary" />
              <span className="font-display uppercase">
                <span className={label}>Hours</span>
                <span className="mt-2 block text-lg font-semibold">Office · {HOURS.office}</span>
                <span className="block text-lg font-semibold text-muted-foreground">Office · {HOURS.officeWeekend}</span>
                <span className="block text-lg font-semibold">
                  Access · <span className="text-primary">{HOURS.access}</span>
                </span>
              </span>
            </div>
            <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="group mt-auto flex items-center justify-between bg-ink p-7 text-white">
              <span>
                <span className="eyebrow">Skip the wait</span>
                <span className="mt-2 block font-display text-2xl font-semibold uppercase">Reserve or rent online</span>
              </span>
              <ArrowUpRight className="size-6 text-primary transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-6">
        <div className="shell">
          <iframe title="Map to Storage Depot" src={MAPS_EMBED} className="h-[420px] w-full border border-border bg-white" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <Reveal>
            <p className="eyebrow">Frequently asked</p>
            <h2 className="display-md mt-4">Everything else</h2>
            <p className="mt-4 text-muted-foreground">Pricing, sizing, access, locks and payments. If your question isn't here, call {PHONE}.</p>
          </Reveal>
          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
