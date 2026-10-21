import { ArrowUpRight, Check, Phone } from "lucide-react";
import { CtaBand, Layout, PageHero, Reveal } from "../components/layout";
import { Footprint, UnitCard } from "../components/blocks";
import { PHONE, PHONE_HREF, UHAUL_URL, UNITS } from "../lib/site";
import { usePageMeta } from "../hooks/use-page-meta";

const INCLUDED = [
  "Interior unit inside the building",
  "First-floor access, no elevators, no stairs",
  "Climate controlled, 65°-85°F",
  "Roll-up door that takes your own lock",
  "10 ft ceiling for vertical stacking",
  "Electronic gate access with your own code",
  "24-hour access, 7 days a week",
  "Alarm system protecting the building",
  "Online rent payments",
  "Paved pad at the door for unloading",
];

export default function Units() {
  usePageMeta(
    "Units & Pricing | Storage Depot Alexander City, AL",
    "Four climate-controlled storage sizes from $75 to $135/month in Alexander City, AL. Compare sizes and reserve online today.",
  );
  return (
    <Layout>
      <PageHero
        eyebrow="Units & pricing"
        title="Sizes and rates, in plain numbers"
        body="Four interior, climate-controlled sizes from $75 a month. Reserve online for a future date, or complete your move-in now and get your gate code immediately."
        image="/images/building-corner-v3.jpg"
        position="center 65%"
      />

      <section className="py-24">
        <div className="shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Available now</p>
              <h2 className="display-md mt-4">Pick your unit</h2>
            </div>
            <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="btn-amber self-start md:self-auto">
              Check live availability <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {UNITS.map((u, i) => (
              <Reveal key={u.dims} delay={i * 80}>
                <UnitCard u={u} featured={i === 1} />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            Rates and availability shown here reflect the current starting rates published on our U-Haul listing and can
            change. Availability is live on the reservation page, so call {PHONE} to confirm before you make the drive.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Side by side</p>
            <h2 className="display-md mt-4">How the sizes compare</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Footprints drawn to scale against a 10 × 20. Remember the 10 ft ceiling, the usable volume is bigger than the
              floor suggests.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {UNITS.map((u, i) => (
              <Reveal key={u.dims} delay={i * 80} className="border border-border bg-white p-6 text-center md:p-8">
                <Footprint sqft={u.sqft} className="mx-auto h-40 w-[55%]" />
                <p className="mt-6 font-display text-3xl font-bold">{u.dims}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {u.sqft} sq ft · {u.sqft * 10} cu ft
                </p>
                <div className="hairline my-5" />
                <p className="font-display text-2xl font-semibold">${u.price}/mo</p>
                <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">Starting at</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Every unit, every size</p>
            <h2 className="display-md mt-4">What's included</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              There's no premium tier here. Whatever size you take, you get the same building, the same climate control and
              the same security.
            </p>
            <div className="mt-10 grid border-l border-t border-border bg-white sm:grid-cols-2">
              {INCLUDED.map((i) => (
                <div key={i} className="flex gap-3 border-b border-r border-border p-5 text-[0.95rem]">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  {i}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src="/images/loading-pad-v3.jpg" alt="Storage Depot building with paved loading pad" className="aspect-[4/3] w-full object-cover" />
            <div className="mt-6 border-l-4 border-primary bg-white p-8">
              <h3 className="text-2xl font-semibold">Between two sizes?</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Size up. The jump from a 10 × 10 to a 10 × 15 is $25 a month, far less than the cost of a second unit
                later, or a truck trip you didn't plan for. Call {PHONE} and describe what you're storing; we'll tell you
                straight.
              </p>
              <a href={PHONE_HREF} className="btn-outline-dark mt-6 !py-3 !text-sm">
                <Phone className="size-4" /> {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
