import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-background/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Developer Studios</h3>
          <p className="mt-3 text-sm text-slate-300">End-to-end software solutions powered by elite freelancers and clear delivery pipelines.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
            <li><Link href="/request" className="transition hover:text-white">Client Request</Link></li>
            <li><Link href="/freelancer-register" className="transition hover:text-white">Freelancer Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <p className="mt-3 text-sm text-slate-300">hello@developerstudios.com</p>
          <p className="text-sm text-slate-300">+1 (555) 010-2323</p>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Developer Studios. All rights reserved.
      </p>
    </footer>
  );
}
