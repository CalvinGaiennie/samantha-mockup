import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#C1C1C1]/40 bg-[#161614] text-[#999999]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-medium text-[#FFFFFB]">Preston Consulting</p>
            <p className="mt-2 text-sm leading-relaxed">
              Your NetSuite Advocate.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#888888]">Pages</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#FFFFFB] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FFFFFB] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFB] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFFFFB] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#888888]">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-[#FFFFFB] transition-colors">Implementation</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFB] transition-colors">Optimization</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFB] transition-colors">Rescue &amp; Stabilization</Link></li>
              <li><Link href="/services" className="hover:text-[#FFFFFB] transition-colors">Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#888888]">Follow</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-[#FFFFFB] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#FFFFFB] transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-[#FFFFFB] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-[#999999]/60">&copy; {new Date().getFullYear()} Preston Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
