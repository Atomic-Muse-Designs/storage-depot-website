import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, MapPin, Phone, Ruler } from "lucide-react";
import { FEATURES } from "../lib/features";
import { CtaBand, Layout, Reveal } from "../components/layout";
import { Faq, Gallery, UnitCard } from "../components/blocks";
import { ADDRESS, HOURS, MAPS_URL, PHONE, PHONE_HREF, UHAUL_URL, UNITS } from "../lib/site";


const STEPS = [
  ["Pick your size", "Compare the four sizes and prices below. If you're between two, size up. It costs a few dollars and saves a second trip."],
  ["Complete move-in online", "Fill out the paperwork and pay your first month of rent from your phone or laptop. No appointment, no counter, no waiting."],
  ["Get your unit and code instantly", "Your unit number and gate access code are issued right away, so you can head straight to the building and start unloading."],
  ["Not moving in yet?", "Reserve a unit for a future date instead and make no payment until move-in day."],
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src="/images/hero-corridor.jpg" alt="Interior corridor of climate-controlled storage units with roll-up doors" className="slowzoom absolute inset-0 h-full w-full object-cover object-[70%_50%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55 md:via-ink/80 md:to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      <div className="shell relative pb-20 pt-20 md:pb-28 md:pt-28">
        <p className="eyebrow rise flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          Self storage in Alexander City, Alabama
        </p>
        <h1 className="display-xl rise mt-6 max-w-5xl" style={{ animationDelay: "90ms" }}>
          Climate-controlled
          <br />
          storage, done <span className="text-primary">right.</span>
        </h1>
        <p className="rise mt-7 max-w-xl text-lg font-light leading-relaxed text-white/85" style={{ animationDelay: "180ms" }}>
          Clean indoor units kept between 65°-85°F year round, behind an electronic gate on Joseph Street. Four sizes,
          honest pricing, 24-hour access, and a local team you can actually reach.
        </p>
        <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "270ms" }}>
          <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="btn-amber">
            Reserve a unit online <ArrowUpRight className="size-4" />
          </a>
          <a href={PHONE_HREF} className="btn-outline-light">
            <Phone className="size-4" /> {PHONE}
          </a>
        </div>
        <div className="rise mt-9 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70" style={{ animationDelay: "360ms" }}>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
            <MapPin className="size-4 text-primary" /> {ADDRESS}
          </a>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" /> Units available now from $75/mo
          </span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const s = [
    ["4", "Unit sizes", "5×10 up to 10×20"],
    ["$75", "Starting rate", "per month"],
    ["24/7", "Storage access", "with your gate code"],
    ["10 ft", "Ceilings", "in every unit"],
  ];
  return (
    <section className="border-b border-border bg-secondary">
      <div className="shell grid grid-cols-2 md:grid-cols-4">
        {s.map(([n, l, sub], i) => (
          <div key={l} className={`py-8 ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-border pl-6 md:pl-8" : ""}`}>
            <p className="font-display text-4xl font-bold">{n}</p>
            <p className="mt-2 font-display text-xs font-semibold uppercase tracking-[0.2em]">{l}</p>
            <p className="text-sm text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sizes() {
  return (
    <section className="py-24">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Sizes & pricing</p>
            <h2 className="display-md mt-4">Four sizes. No guesswork.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Every unit is interior, on the first floor, climate controlled, and fitted with a roll-up door and a 10 ft
              ceiling. The only decision left is how much floor you need.
            </p>
          </div>
          <Link href="/units" className="btn-outline-dark self-start md:self-auto">
            Full size guide <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {UNITS.map((u, i) => (
            <Reveal key={u.dims} delay={i * 80}>
              <UnitCard u={u} featured={i === 1} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Rates shown are the current starting rates published on our U-Haul listing and can change with availability. Call{" "}
          {PHONE} for today's exact price.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-steel py-24 text-white">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Why Storage Depot</p>
          <h2 className="display-md mt-4">
            Built for Alabama
            <br />
            heat and humidity
          </h2>
          <p className="mt-5 max-w-xl font-light text-white/70">
            A metal shed on a gravel lot is cheap for a reason. Here, everything is inside, conditioned, gated and alarmed. These are the
            six features that decide whether your things come out the way they went in.
          </p>
        </Reveal>
        <div className="mt-12 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80} className="border-b border-r border-white/15 p-8">
              <f.icon className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 text-2xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.body}</p>
            </Reveal>
          ))}
        </div>
        <Link href="/facility" className="btn-outline-light mt-10">
          Facility & security <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function StackUp() {
  return (
    <section className="py-24">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <img src="/images/building-side-ac-v3.jpg" alt="Climate-controlled Storage Depot building with HVAC unit" className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]" />
          <div className="absolute -bottom-6 right-6 bg-primary px-6 py-5 text-ink md:-right-6">
            <p className="font-display text-4xl font-bold">10 ft</p>
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em]">Ceiling height</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Not sure what you need?</p>
          <h2 className="display-md mt-4">Stack up, not out</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Every unit here has a 10 ft ceiling, so the floor plan understates what you can actually fit. Load heavy
            furniture along the walls, stack boxes to shoulder height down the middle, and leave a walkway to the back.
          </p>
          <div className="mt-8 border-t border-border">
            {UNITS.map((u) => (
              <div key={u.dims} className="flex items-center justify-between border-b border-border py-4">
                <span className="font-display text-xl font-semibold">{u.dims}</span>
                <span className="text-sm text-muted-foreground">{u.fits.replace("Fits about a ", "")}</span>
              </div>
            ))}
          </div>
          <Link href="/units" className="btn-outline-dark mt-8">
            <Ruler className="size-4" /> Compare all sizes
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Property() {
  return (
    <section className="border-t border-border bg-secondary py-24">
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">See the property</p>
            <h2 className="display-md mt-4">277 Joseph Street</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A fenced, gated lot with one conditioned steel building and a wide paved pad out front for loading. Look for
              the red Storage Depot sign at the road.
            </p>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-outline-dark self-start md:self-auto">
            <MapPin className="size-4" /> Get directions
          </a>
        </Reveal>
        <div className="mt-12">
          <Gallery count={6} />
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Rent now, online</p>
          <h2 className="display-md mt-4">Skip the counter entirely</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Move-in paperwork, first month's rent, unit number and gate code, all handled from your phone, even on a
            weekend.
          </p>
        </Reveal>
        <div className="mt-12 border-t border-border">
          {STEPS.map(([t, b], i) => (
            <Reveal key={t} delay={i * 60} className="grid gap-3 border-b border-border py-8 md:grid-cols-[8rem_1fr_1.2fr] md:items-center">
              <span className="font-display text-5xl font-bold text-primary">0{i + 1}</span>
              <h3 className="text-2xl font-semibold">{t}</h3>
              <p className="text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
        <a href={UHAUL_URL} target="_blank" rel="noreferrer" className="btn-amber mt-10">
          Start online <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Management() {
  return (
    <section className="bg-ink py-24 text-white">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Local management</p>
          <h2 className="display-md mt-4">Managed by 3H Management</h2>
          <p className="mt-5 font-light leading-relaxed text-white/70">
            Storage Depot is independently owned and operated, and managed locally by 3H Management, the same team running
            residential communities across central Alabama. When you call, you get someone who knows the property, not a
            national call center reading a script.
          </p>
          <div className="mt-7 grid max-w-md grid-cols-2 gap-px bg-white/15">
            <div className="bg-ink p-4 pl-0">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-white/50">Office</p>
              <p className="mt-1 font-display text-lg">{HOURS.office}</p>
              <p className="text-xs text-white/50">{HOURS.officeWeekend}</p>
            </div>
            <div className="bg-ink p-4">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-white/50">Storage access</p>
              <p className="mt-1 font-display text-lg text-primary">{HOURS.access}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="btn-amber">
              <Phone className="size-4" /> Talk to us
            </a>
            <Link href="/contact" className="btn-outline-light">
              Send a message
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img src="/images/fenced-lot-v3.jpg" alt="Fenced and gated Storage Depot property" className="aspect-[4/3] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

function FaqTeaser() {
  return (
    <section className="py-24">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.7fr]">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="display-md mt-4">
            Answers,
            <br />
            straight up
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still unsure about something? Call {PHONE} during office hours and we'll sort it out in two minutes.
          </p>
          <Link href="/contact" className="btn-outline-dark mt-8">
            All FAQs & contact <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <Faq limit={5} />
        </Reveal>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Sizes />
      <Features />
      <StackUp />
      <Property />
      <Steps />
      <Management />
      <FaqTeaser />
      <CtaBand />
    </Layout>
  );
}
