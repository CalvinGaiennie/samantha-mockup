import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Preston Consulting",
  description: "Meet Samantha Preston. 15+ years of NetSuite consulting.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium tracking-wide text-[#8a8a84]">About</p>
          <h1 className="mt-2 max-w-lg text-3xl font-semibold text-[#e8e8e4] sm:text-4xl">
            The short version: I fix NetSuite problems.
          </h1>
        </div>
      </section>

      <section className="border-t border-white/5 py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-3">
            <h2 className="text-xl font-semibold text-[#e8e8e4]">Samantha Preston</h2>
            <p className="mt-1 text-sm text-[#EEFEAB]">Founder &amp; Lead Consultant</p>

            <p className="mt-6 leading-relaxed text-[#a0a09a]">
              People call me the &ldquo;Godmother of NetSuite&rdquo; &mdash; mostly because
              I&rsquo;ve been in this world for over 15 years and I&rsquo;ve seen just about
              every way an implementation can go wrong. I started Preston Consulting because
              too many businesses were getting sold systems they didn&rsquo;t understand by
              people who wouldn&rsquo;t be around to help when things broke.
            </p>
            <p className="mt-4 leading-relaxed text-[#a0a09a]">
              My approach is simple: I figure out what your business actually needs, build
              it properly, and make sure your team knows how to run it. No mystery, no
              dependency on consultants forever. I want to work myself out of a job &mdash;
              that&rsquo;s how you know it was done right.
            </p>
            <p className="mt-4 leading-relaxed text-[#a0a09a]">
              I&rsquo;ve done this for retail chains, SaaS companies, healthcare distributors,
              and everything in between. If it runs on NetSuite, I can probably help.
            </p>
          </div>
          <div className="order-first lg:order-last lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5">
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

      <section className="border-t border-white/5 bg-[#242422] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold text-[#e8e8e4]">How I work</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-white/5 bg-[#2a2a28] p-6">
              <h3 className="font-semibold text-[#e8e8e4]">Your goals come first</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a09a]">
                I don&rsquo;t have a playbook I force everyone through. We start with what
                your business actually needs and build from there.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#2a2a28] p-6">
              <h3 className="font-semibold text-[#e8e8e4]">I&rsquo;ve done this before</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a09a]">
                15 years across retail, SaaS, healthcare, distribution &mdash; I&rsquo;ve
                seen the patterns and I know what works.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#2a2a28] p-6">
              <h3 className="font-semibold text-[#e8e8e4]">You&rsquo;ll see the difference</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a09a]">
                I tie everything to real numbers. If we can&rsquo;t measure whether it worked,
                we&rsquo;re not doing it right.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#2a2a28] p-6">
              <h3 className="font-semibold text-[#e8e8e4]">Knowledge transfer, always</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a09a]">
                I train your team as we go. The goal is for you to not need me anymore &mdash;
                that&rsquo;s what good consulting looks like.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-semibold text-[#e8e8e4]">
            Think we&rsquo;d work well together?
          </h2>
          <p className="mt-2 text-[#8a8a84]">
            I&rsquo;m always happy to talk through what you&rsquo;re dealing with,
            even if we don&rsquo;t end up working together.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[#EEFEAB] px-7 py-3.5 text-sm font-semibold text-[#1e1e1c] hover:brightness-95 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
