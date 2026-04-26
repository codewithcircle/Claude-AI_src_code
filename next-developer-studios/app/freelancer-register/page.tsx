import Section from '@/components/Section';

export default function FreelancerRegisterPage() {
  return (
    <Section
      title="Freelancer Register"
      subtitle="Join our vetted network and get matched with high-quality client projects."
      className="pt-12"
    >
      <form className="card mx-auto grid max-w-3xl gap-4">
        <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Full Name" />
        <input type="email" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Email Address" />
        <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Primary Skill (e.g., React, UI Design, Node.js)" />
        <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Portfolio URL" />
        <textarea className="min-h-36 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Tell us about your experience and availability." />
        <button type="submit" className="btn-primary">Apply as Freelancer</button>
      </form>
    </Section>
  );
}
