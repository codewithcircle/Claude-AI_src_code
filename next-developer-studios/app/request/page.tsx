export default function RequestPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="card">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">Client Register / Request</h1>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Share your project details and our team will contact you within 24 hours.
        </p>
        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Company Name" />
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Work Email" type="email" />
          <select className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm">
            <option>Project Type</option>
            <option>Web App</option>
            <option>Design</option>
            <option>Growth / Marketing</option>
          </select>
          <textarea className="min-h-32 rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Describe your project scope and timeline" />
          <button className="gradient-button w-fit" type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
