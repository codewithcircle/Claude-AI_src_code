'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/request', label: 'Request' },
  { href: '/freelancer-register', label: 'Freelancer Register' },
  { href: '/admin/login', label: 'Admin Login' },
  { href: '/admin/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="bg-blue-purple bg-clip-text text-xl font-bold text-transparent">
          Developer Studios
        </Link>

        <button
          type="button"
          className="rounded-xl border border-white/20 px-3 py-2 text-sm text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <ul className="space-y-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
