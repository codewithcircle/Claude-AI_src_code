export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h4 className="text-lg font-semibold text-foreground">Next Developer Studios</h4>
          <p className="mt-3 text-sm text-slate-300">
            Building reliable software products with vetted freelancers and transparent delivery workflows.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Company</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>About</li>
            <li>Services</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Support</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Contact</h5>
          <p className="mt-3 text-sm text-slate-300">hello@nextdeveloperstudios.com</p>
          <p className="text-sm text-slate-300">+1 (555) 108-2334</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Next Developer Studios. All rights reserved.
      </p>
    </footer>
  );
}
