import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Preston Consulting",
  description: "Get in touch with Samantha Preston about your NetSuite project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium tracking-wide text-[#8a8a84]">Contact</p>
          <h1 className="mt-2 max-w-lg text-3xl font-semibold text-[#e8e8e4] sm:text-4xl">
            Tell me what you&rsquo;re working with.
          </h1>
          <p className="mt-4 max-w-lg text-[#8a8a84]">
            Bad implementation? New build? Something in between? Drop me a note
            and I&rsquo;ll get back to you within a day or two.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <form className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-[#c0c0ba]">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full rounded-lg border border-white/10 bg-[#252523] px-4 py-3 text-sm text-[#e8e8e4] outline-none transition-colors placeholder:text-[#6a6a64] focus:border-[#EEFEAB]/50 focus:ring-2 focus:ring-[#EEFEAB]/10"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-[#c0c0ba]">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full rounded-lg border border-white/10 bg-[#252523] px-4 py-3 text-sm text-[#e8e8e4] outline-none transition-colors placeholder:text-[#6a6a64] focus:border-[#EEFEAB]/50 focus:ring-2 focus:ring-[#EEFEAB]/10"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#c0c0ba]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-[#252523] px-4 py-3 text-sm text-[#e8e8e4] outline-none transition-colors placeholder:text-[#6a6a64] focus:border-[#EEFEAB]/50 focus:ring-2 focus:ring-[#EEFEAB]/10"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[#c0c0ba]">
                  What do you need help with?
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-[#252523] px-4 py-3 text-sm text-[#e8e8e4] outline-none transition-colors placeholder:text-[#6a6a64] focus:border-[#EEFEAB]/50 focus:ring-2 focus:ring-[#EEFEAB]/10"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#c0c0ba]">
                  Anything else I should know?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#252523] px-4 py-3 text-sm text-[#e8e8e4] outline-none transition-colors placeholder:text-[#6a6a64] focus:border-[#EEFEAB]/50 focus:ring-2 focus:ring-[#EEFEAB]/10"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-[#EEFEAB] px-7 py-3.5 text-sm font-semibold text-[#1e1e1c] hover:brightness-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/5 bg-[#252523] p-7">
              <h3 className="font-semibold text-[#e8e8e4]">Get in touch</h3>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#6a6a64]">Email</h4>
                  <a href="mailto:hello@prestonconsulting.com" className="mt-1 block text-sm text-[#EEFEAB] hover:underline">
                    hello@prestonconsulting.com
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#6a6a64]">Elsewhere</h4>
                  <div className="mt-2 flex gap-5 text-sm text-[#8a8a84]">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e4] transition-colors">Instagram</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e4] transition-colors">YouTube</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e4] transition-colors">LinkedIn</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#6a6a64]">Timeline</h4>
                  <p className="mt-1 text-sm text-[#8a8a84]">
                    I usually reply within a business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
