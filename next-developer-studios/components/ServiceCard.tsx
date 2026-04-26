type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-card/80 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
    </article>
  );
}
