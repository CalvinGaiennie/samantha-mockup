"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#C1C1C1]/40 bg-[#FFFFFB]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#161614]">
          Preston Consulting
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-[#555555] hover:text-[#161614] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm text-[#555555] hover:text-[#161614] transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm text-[#555555] hover:text-[#161614] transition-colors">
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-[#161614] px-5 py-2.5 text-sm font-medium text-[#FFFFFB] hover:bg-black transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-[#161614] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#161614] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#161614] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-[#C1C1C1]/40 bg-[#FFFFFB] px-6 py-6 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-[#161614]">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-[#161614]">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="text-sm text-[#161614]">Services</Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-fit rounded-lg bg-[#161614] px-5 py-2.5 text-sm font-medium text-[#FFFFFB]"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
