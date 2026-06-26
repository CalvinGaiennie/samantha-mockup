import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Preston Consulting",
  description: "Meet Samantha Preston and learn about 15+ years of NetSuite expertise.",
};

const values = [
  {
    icon: "🎯",
    title: "Client-Focused",
    description: "Every recommendation is grounded in your business goals, not a one-size-fits-all playbook.",
  },
  {
    icon: "⚙️",
    title: "Deep Expertise",
    description: "15+ years of hands-on NetSuite experience across industries — retail, SaaS, healthcare, and more.",
  },
  {
    icon: "📈",
    title: "Measurable Impact",
    description: "We tie every project to KPIs so you can see the ROI in real numbers, not just promises.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    description: "We work alongside your team, transferring knowledge so you're never dependent on outside help.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-50 to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            About Us
          </span>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Meet Samantha Preston
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Known affectionately as the &ldquo;Godmother of NetSuite,&rdquo; Samantha founded
            Preston Consulting with a clear vision: to be{" "}
            <strong className="text-zinc-800">your NetSuite advocate</strong>.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/assets/samantha-portrait.webp"
              alt="Samantha Preston, Founder and Lead Consultant"
              width={683}
              height={1024}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-zinc-900">15+ Years of Hands-On ERP Experience</h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Samantha brings a unique blend of deep technical expertise, innovative thinking,
              and a passion for streamlining processes to every project she undertakes. Her
              strategic insights, paired with a client-focused approach, guarantee that every
              project is executed with precision and delivers measurable, impactful results.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Whether you&rsquo;re looking to enhance your current NetSuite system or implement
              it for the first time, Samantha and her dedicated team are here to guide you
              every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-zinc-200 bg-white p-8 text-center">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-zinc-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Let&rsquo;s Work Together
          </h2>
          <p className="mt-4 text-zinc-500">
            Ready to unlock the full potential of your business with NetSuite?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
