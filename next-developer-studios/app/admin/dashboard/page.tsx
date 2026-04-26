import Section from '@/components/Section';

const stats = [
  ['Open Requests', '24'],
  ['Active Freelancers', '68'],
  ['Projects In Delivery', '14'],
  ['Avg. Satisfaction', '4.9/5'],
];

export default function AdminDashboardPage() {
  return (
    <Section title="Admin Dashboard" subtitle="Overview of requests, freelancer pipeline, and project status." className="pt-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <article key={label} className="card">
            <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-bold text-white">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="card">
          <h3 className="text-lg font-semibold text-white">Recent Client Requests</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Fintech dashboard redesign — awaiting proposal review</li>
            <li>• Marketplace backend scaling — freelancer shortlist ready</li>
            <li>• Mobile app QA sprint — kickoff scheduled this week</li>
          </ul>
        </article>

        <article className="card">
          <h3 className="text-lg font-semibold text-white">Freelancer Pipeline</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• 9 new applications this week</li>
            <li>• 5 technical interviews in progress</li>
            <li>• 3 approved and available for matching</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
