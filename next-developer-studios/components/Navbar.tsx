'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/request', label: 'Request' },
  { href: '/freelancer-register', label: 'Freelancer Register' },
  { href: '/admin/login', label: 'Admin Login' },
  { href: '/admin/dashboard', label: 'Dashboard' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-bold tracking-wide text-foreground sm:text-lg">
          Next Developer Studios
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-white/20 px-3 py-2 text-sm text-foreground transition hover:border-accent sm:hidden"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-5 text-sm sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="text-slate-200 transition hover:text-white" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul className="space-y-2 border-t border-white/10 px-4 py-4 sm:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-100 transition hover:border-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
