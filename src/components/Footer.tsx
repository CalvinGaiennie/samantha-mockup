import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#181816] text-[#8a8a84]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-medium text-[#c0c0ba]">Preston Consulting</p>
            <p className="mt-2 text-sm leading-relaxed">
              Your NetSuite Advocate.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#6a6a64]">Pages</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#e8e8e4] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#e8e8e4] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#e8e8e4] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#e8e8e4] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#6a6a64]">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-[#e8e8e4] transition-colors">Implementation</Link></li>
              <li><Link href="/services" className="hover:text-[#e8e8e4] transition-colors">Optimization</Link></li>
              <li><Link href="/services" className="hover:text-[#e8e8e4] transition-colors">Rescue &amp; Stabilization</Link></li>
              <li><Link href="/services" className="hover:text-[#e8e8e4] transition-colors">Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#6a6a64]">Follow</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e4] transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e4] transition-colors">YouTube</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8e8e4] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <p className="text-xs text-[#5a5a54]">&copy; {new Date().getFullYear()} Preston Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
