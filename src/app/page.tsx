import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "End-to-End NetSuite Implementation",
    client: "National Retail Chain",
    summary:
      "Migrated a 200-location retail operation from legacy systems to NetSuite in under 6 months, reducing order processing time by 40%.",
    tag: "Implementation",
  },
  {
    title: "ERP Optimization & Workflow Automation",
    client: "SaaS Startup",
    summary:
      "Redesigned approval workflows and automated revenue recognition, saving 20+ hours per month in manual accounting work.",
    tag: "Optimization",
  },
  {
    title: "Post-Go-Live Rescue & Stabilization",
    client: "Healthcare Distributor",
    summary:
      "Stepped in after a failed implementation to diagnose issues, retrain staff, and deliver a stable, fully-functional system within 90 days.",
    tag: "Rescue",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/assets/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-28 lg:py-40">
          <span className="rounded-full border border-accent-light/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
            Your NetSuite Advocate
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Unlock the Full Potential of Your&nbsp;
            <span className="bg-gradient-to-r from-accent-light to-purple-300 bg-clip-text text-transparent">
              NetSuite&nbsp;ERP
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-300">
            Samantha Preston &mdash; the &ldquo;Godmother of NetSuite&rdquo; &mdash; brings
            15+ years of hands-on expertise to every engagement. From first-time
            implementations to complex optimizations, we deliver measurable results.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Case Studies
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Real Results for Real Businesses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
              Every engagement is unique. Here&rsquo;s a look at how we&rsquo;ve helped
              organizations transform their operations with NetSuite.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {study.tag}
                </span>
                <h3 className="text-lg font-bold text-zinc-900">{study.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-dark">{study.client}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">
                  {study.summary}
                </p>
                <div className="mt-6">
                  <span className="text-sm font-semibold text-accent group-hover:underline">
                    Read case study &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your NetSuite?
          </h2>
          <p className="mt-4 text-lg text-purple-100">
            Preparation + Vision = Success. Let&rsquo;s build a system that works for you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-accent shadow-lg hover:bg-zinc-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
