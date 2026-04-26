const metrics = [
  ['Open Requests', '24'],
  ['Active Freelancers', '118'],
  ['Projects This Month', '39'],
  ['Client Satisfaction', '96%']
];

export default function AdminDashboardPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-slate-300">Monitor requests, freelancer onboarding, and project throughput.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([label, value]) => (
          <article key={label} className="card">
            <p className="text-sm text-slate-300">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-blue-100">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="card">
          <h2 className="text-lg font-semibold text-white">Recent Client Requests</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Fintech SaaS redesign — Budget: $15k — Status: Reviewing</li>
            <li>E-commerce analytics dashboard — Budget: $9k — Status: Matched</li>
            <li>B2B landing + funnel automation — Budget: $6k — Status: In Progress</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="text-lg font-semibold text-white">Freelancer Pipeline</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>12 new applications awaiting screening</li>
            <li>8 candidates in technical review</li>
            <li>5 approved experts added this week</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
