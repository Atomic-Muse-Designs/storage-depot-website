import { Clock, MapPin, Navigation } from "lucide-react";
import { CtaBand, Layout, PageHero, Reveal } from "../components/layout";
import { Gallery } from "../components/blocks";
import { FEATURES } from "../lib/features";
import { CITY, HOURS, MAPS_URL, PHONE, PHONE_HREF, STREET } from "../lib/site";

const CLIMATE = [
  ["Wood and upholstery", "Alabama summers swing from dry heat to soaking humidity in a day. Unconditioned storage lets wood joints swell and shrink until they loosen, and gives mildew a foothold in cushions and mattresses."],
  ["Electronics and photographs", "Condensation is what kills stored electronics, and humidity makes prints and paper curl and stick together. Keeping a steady 65°-85°F stops moisture from cycling in and out of your things."],
  ["Documents and instruments", "Business records, books and anything with a soundboard or a leather strap belong in conditioned space. It's the difference between storing something and slowly losing it."],
];

export default function Facility() {
  return (
    <Layout>
      <PageHero
        eyebrow="Facility & security"
        title="Inside 277 Joseph Street"
        body="Interior units in a conditioned building, on a fenced lot behind an electronic gate, protected by an alarm system. Here's exactly what that means for the things you're storing."
        image="/images/gated-entry-v3.jpg"
        position="center 60%"
      />

      <section className="py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">The facility</p>
            <h2 className="display-md mt-4">Six things that matter</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              This is the complete confirmed feature list for 277 Joseph Street. No padding, no amenities we don't actually
              have.
            </p>
          </Reveal>
          <div className="mt-12 border-t border-border">
            {FEATURES.map((f) => (
              <Reveal key={f.title} className="grid gap-5 border-b border-border py-9 md:grid-cols-[3.5rem_1fr_1.4fr] md:gap-8">
                <span className="grid size-14 place-items-center border border-border bg-white">
                  <f.icon className="size-5 text-primary" strokeWidth={1.5} />
                </span>
                <h3 className="self-center text-[1.75rem] font-semibold">{f.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{f.long}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel py-24 text-white">
        <div className="shell grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Climate control</p>
            <h2 className="display-md mt-4">
              Why 65°-85°F
              <br />
              is the whole point
            </h2>
            <p className="mt-5 max-w-lg font-light leading-relaxed text-white/70">
              Every unit at Storage Depot is climate controlled. In central Alabama that isn't a luxury upgrade, it's the
              reason your furniture, records and electronics are still worth keeping when you come back for them.
            </p>
            <img src="/images/building-side-ac-v3.jpg" alt="HVAC unit beside the Storage Depot building" className="mt-10 aspect-[4/3] w-full object-cover object-[50%_70%]" />
          </Reveal>
          <Reveal delay={120} className="self-center border-t border-white/15">
            {CLIMATE.map(([t, b]) => (
              <div key={t} className="border-b border-white/15 py-8">
                <h3 className="text-2xl font-semibold">{t}</h3>
                <p className="mt-3 font-light leading-relaxed text-white/65">{b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Getting in</p>
            <h2 className="display-md mt-4">Your code, your door</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Entry runs through an electronic gate. You get your own access code, and it works around the clock. Rent
              online and the code is issued immediately, so your first trip can be a loading trip. Inside, your unit's
              roll-up door takes your own lock, so you hold the only key.
            </p>
            <div className="mt-10 border border-border border-t-4 border-t-primary bg-white p-8">
              <p className="flex items-center gap-3 font-display text-2xl font-semibold uppercase">
                <Clock className="size-5 text-primary" /> Hours
              </p>
              <dl className="mt-6 divide-y divide-border">
                <div className="flex justify-between gap-4 py-4">
                  <dt className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">Office</dt>
                  <dd className="text-right font-display text-lg font-semibold uppercase">
                    {HOURS.office}
                    <span className="block text-sm font-medium text-muted-foreground">{HOURS.officeWeekend}</span>
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-4">
                  <dt className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">Storage access</dt>
                  <dd className="font-display text-lg font-semibold uppercase text-primary">{HOURS.access}</dd>
                </div>
              </dl>
              <p className="mt-2 text-sm text-muted-foreground">
                Questions outside office hours? Leave a message at{" "}
                <a href={PHONE_HREF} className="underline">
                  {PHONE}
                </a>{" "}
                or reserve online any time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img src="/images/entry-gate-v3.jpg" alt="Storage Depot electronic entry gate and keypad" className="aspect-[4/3] w-full object-cover" />
            <div className="mt-6 border border-border bg-white p-8">
              <p className="flex items-center gap-3 font-display text-2xl font-semibold uppercase">
                <MapPin className="size-5 text-primary" /> Find us
              </p>
              <p className="mt-4 text-lg">
                {STREET}
                <br />
                {CITY}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Look for the red Storage Depot sign at the road, an easy drive from downtown Alexander City, Dadeville,
                Kellyton and the Lake Martin communities.
              </p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-outline-dark mt-6 !py-3 !text-sm">
                <Navigation className="size-4" /> Get directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Photo tour</p>
            <h2 className="display-md mt-4">The whole property</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Tap any photo to view it full size.</p>
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
