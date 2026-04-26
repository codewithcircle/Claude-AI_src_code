type ServiceCardProps = {
  title: string;
  description: string;
  items: string[];
};

export default function ServiceCard({ title, description, items }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-blue-400/20 bg-card/80 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-blue-300/40">
      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
