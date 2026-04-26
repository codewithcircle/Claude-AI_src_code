export default function AdminLoginPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="card w-full">
        <h1 className="text-2xl font-bold text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-300">Secure access for operations and moderation panel.</p>
        <form className="mt-6 grid gap-4">
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Admin Email" type="email" />
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm" placeholder="Password" type="password" />
          <button className="gradient-button w-full" type="submit">Sign In</button>
        </form>
      </div>
    </section>
  );
}
