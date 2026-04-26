import Section from '@/components/Section';

export default function RequestPage() {
  return (
    <Section
      title="Client Register / Request"
      subtitle="Share your project details and we will contact you with a tailored proposal."
      className="pt-12"
    >
      <form className="card mx-auto grid max-w-3xl gap-4">
        <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Company / Name" />
        <input type="email" className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Email Address" />
        <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Project Type" />
        <textarea className="min-h-36 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Describe your project goals, timeline, and budget range." />
        <button type="submit" className="btn-primary">Submit Request</button>
      </form>
    </Section>
  );
}
