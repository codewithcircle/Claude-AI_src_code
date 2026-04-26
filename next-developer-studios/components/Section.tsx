import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
