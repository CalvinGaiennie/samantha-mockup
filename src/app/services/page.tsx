import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Preston Consulting",
  description: "NetSuite implementation, optimization, rescue, training, and ongoing support.",
};

const services = [
  {
    title: "NetSuite Implementation",
    description:
      "Starting from scratch? I'll plan, configure, and roll out your NetSuite system from the ground up — scoped to what your business actually needs, not a bloated checklist. Includes data migration, workflow setup, and go-live support.",
  },
  {
    title: "ERP Optimization",
    description:
      "Already on NetSuite but it feels clunky? I'll audit your current setup, find the bottlenecks, and rebuild the workflows that are slowing your team down. Most clients see results within the first month.",
  },
  {
    title: "Rescue & Stabilization",
    description:
      "Bad implementation? You're not alone — it's one of the most common calls I get. I'll come in, diagnose what went wrong, fix the critical issues, and get your system to a place where your team can actually trust it.",
  },
  {
    title: "Process Automation",
    description:
      "If your team is still doing things by hand that NetSuite could handle automatically, you're leaving time and money on the table. I'll identify the best candidates for automation and build them out.",
  },
  {
    title: "Training & Knowledge Transfer",
    description:
      "I train your team as part of every engagement, but I also do standalone training for companies that just need their people to get better at using what they already have.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "Some clients keep me on retainer for a few hours a month. I answer questions, troubleshoot issues, and help plan what's next as the business grows. Think of it as having a NetSuite expert on speed dial.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium tracking-wide text-[#555555]">Services</p>
          <h1 className="mt-2 max-w-lg text-3xl font-semibold text-[#161614] sm:text-4xl">
            Here&rsquo;s what I can help with.
          </h1>
          <p className="mt-4 max-w-lg text-[#555555]">
            Every business is different. These are the areas I work in most, but if
            your situation doesn&rsquo;t fit neatly into a box, just reach out &mdash;
            we&rsquo;ll figure it out.
          </p>
        </div>
      </section>

      <section className="border-t border-[#C1C1C1]/40 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="rounded-xl border border-[#C1C1C1]/40 bg-[#FFFFFB] p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-[#161614]">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#C1C1C1]/40 bg-[#FAFAFA] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-semibold text-[#161614]">
            Not sure which service you need?
          </h2>
          <p className="mt-2 text-[#555555]">
            That&rsquo;s fine. Most people aren&rsquo;t when they first reach out.
            Tell me what&rsquo;s going on and I&rsquo;ll point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[#161614] px-7 py-3.5 text-sm font-semibold text-[#FFFFFB] shadow-md hover:bg-black transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
