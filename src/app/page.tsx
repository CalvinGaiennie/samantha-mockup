import Image from "next/image";
import Link from "next/link";

const work = [
  {
    title: "200-Location Retail Migration",
    description:
      "Moved a national retail chain off a patchwork of legacy systems and onto NetSuite in under six months. Order processing time dropped from days to hours.",
  },
  {
    title: "Revenue Recognition Overhaul",
    description:
      "A SaaS company was spending 20+ hours a month on manual rev rec and approvals. We rebuilt the whole process inside NetSuite so their team could get back to real work.",
  },
  {
    title: "Post-Go-Live Rescue",
    description:
      "A healthcare distributor's NetSuite rollout had gone sideways. We came in, found the root issues, retrained the staff, and had things stable within 90 days.",
  },
];

const services = [
  {
    title: "Implementation",
    description: "First-time NetSuite setup, done properly from day one.",
  },
  {
    title: "Optimization",
    description: "Make your existing system faster, cleaner, and easier to use.",
  },
  {
    title: "Rescue & Stabilization",
    description: "Fix a broken rollout and get your team back on track.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#161614] text-[#FFFFFB]">
        <Image
          src="/assets/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161614] via-[#161614]/70 to-[#161614]/80" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-5 lg:gap-16 lg:py-28">
          <div className="lg:col-span-3">
            <h1 className="max-w-lg text-3xl font-semibold leading-snug sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Your NetSuite isn&rsquo;t working the way it should. I can fix&nbsp;that.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#D0D0D0]">
              I&rsquo;m Samantha Preston &mdash; 15 years of NetSuite consulting for
              businesses that are tired of systems that don&rsquo;t deliver.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-[#EEFEAB] px-8 py-4 text-base font-semibold text-[#161614] shadow-md hover:brightness-95 transition"
            >
              Work With Me
            </Link>
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <Image
                src="/assets/samantha-portrait.webp"
                alt="Samantha Preston"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-[#161614] sm:text-3xl">
            What that looks like in practice
          </h2>
          <p className="mt-2 text-[#555555]">
            A few client outcomes. Names withheld, results real.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {work.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#C1C1C1]/40 bg-[#FFFFFB] p-6 shadow-sm"
              >
                <h3 className="font-semibold text-[#161614]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-t border-[#C1C1C1]/40 bg-[#FAFAFA] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-[#161614] sm:text-3xl">
            What I do
          </h2>
          <p className="mt-2 text-[#555555]">
            The three things most clients come to me for.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-[#C1C1C1]/40 bg-[#FFFFFB] p-6 shadow-sm">
                <h3 className="font-semibold text-[#161614]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-10 inline-block rounded-lg bg-[#161614] px-8 py-4 text-base font-semibold text-[#FFFFFB] shadow-md hover:bg-black transition-colors"
          >
            See All Services
          </Link>
        </div>
      </section>
    </>
  );
}
