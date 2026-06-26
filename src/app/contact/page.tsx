import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Preston Consulting",
  description: "Get in touch with Samantha Preston to start your NetSuite journey.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-50 to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Contact
          </span>
          <h1 className="mt-3 max-w-xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Let&rsquo;s Connect
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            It all begins with an idea. Whether you&rsquo;re unhappy with your current
            implementation, unsure where to start, or need project work completed —
            your success starts here.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Samantha"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Preston"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="samantha@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-700">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="NetSuite Implementation Help"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-zinc-50 p-8">
              <h3 className="text-lg font-bold text-zinc-900">Get in Touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Preparation + Vision = Success. We&rsquo;d love to hear about your business
                and how we can help.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Email</h4>
                  <a href="mailto:hello@prestonconsulting.com" className="mt-1 block text-sm font-medium text-accent hover:underline">
                    hello@prestonconsulting.com
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Follow</h4>
                  <div className="mt-2 flex gap-4 text-sm text-zinc-600">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      Instagram
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      YouTube
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Response Time</h4>
                  <p className="mt-1 text-sm text-zinc-600">
                    We typically respond within 24 hours on business days.
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
