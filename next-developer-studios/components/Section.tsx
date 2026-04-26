import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 text-center md:mb-10">
          {title && <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{title}</h2>}
          {subtitle && <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
