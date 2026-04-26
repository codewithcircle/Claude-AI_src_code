import Link from 'next/link';
import Section from '@/components/Section';

export default function AdminLoginPage() {
  return (
    <Section title="Admin Login" subtitle="Secure access for administrators and operations managers." className="pt-12">
      <form className="card mx-auto grid max-w-md gap-4">
        <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Admin Email" />
        <input type="password" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Password" />
        <button type="submit" className="btn-primary">Login</button>
        <Link href="/admin/dashboard" className="text-center text-xs text-slate-400 transition hover:text-slate-200">
          Demo shortcut: Open dashboard
        </Link>
      </form>
    </Section>
  );
}
