export default function FreelancerRegisterPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="card">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Freelancer Register</h1>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Apply to join our vetted freelancer network and get matched to premium projects.
        </p>
        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Full Name" />
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Email Address" type="email" />
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Primary Skill (e.g., React, UX, SEO)" />
          <textarea className="min-h-32 rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Portfolio links and relevant experience" />
          <button className="gradient-button w-fit" type="submit">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
