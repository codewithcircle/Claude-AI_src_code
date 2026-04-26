import Link from 'next/link';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';

const serviceCategories = [
  {
    title: 'Web & SaaS Development',
    description: 'Product-focused engineering for modern applications and internal tools.',
    items: ['Next.js apps', 'API integrations', 'Performance tuning']
  },
  {
    title: 'Design & Branding',
    description: 'UI/UX systems that make your platform look polished and conversion-ready.',
    items: ['Design systems', 'User flows', 'Clickable prototypes']
  },
  {
    title: 'Growth & Automation',
    description: 'Data-informed workflows for lead generation, CRM, and analytics.',
    items: ['Funnel optimization', 'Marketing automations', 'Dashboard reporting']
  }
];

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-hero-gradient p-8 sm:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Digital Product Talent Marketplace</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build your next product with elite developers, designers, and growth freelancers.
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-slate-200 sm:text-lg">
            Next Developer Studios connects startups and businesses with vetted experts to deliver web platforms,
            mobile-ready experiences, and launch campaigns—faster and with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/request" className="gradient-button">
              Start a Project Request
            </Link>
            <Link href="/freelancer-register" className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold transition hover:border-white">
              Join as Freelancer
            </Link>
          </div>
        </div>
      </section>

      <Section id="services" title="Service Categories" subtitle="Solutions designed for speed, quality, and business impact.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.title} {...category} />
          ))}
        </div>
      </Section>

      <Section title="How it Works" subtitle="A transparent process that keeps projects predictable.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['1. Submit Request', 'Tell us your goals, timeline, and budget on the request page.'],
            ['2. Match & Scope', 'We shortlist freelancers and define clear milestones in 48 hours.'],
            ['3. Build & Launch', 'Track delivery in real-time and go live with QA-backed confidence.']
          ].map(([title, copy]) => (
            <article key={title} className="card">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Testimonials" subtitle="What clients and freelancers say about working with us.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ['“We launched in six weeks.”', 'The team matched us with specialists who understood startup velocity. — A. Morgan, Founder'],
            ['“Clear briefs, fast payments.”', 'As a freelancer, I get organized projects and supportive PM communication. — L. Ramirez, Frontend Engineer'],
            ['“Reliable execution end-to-end.”', 'From discovery to deployment, we had full visibility and strong outcomes. — K. Tran, Product Lead']
          ].map(([quote, meta]) => (
            <article key={quote} className="card">
              <p className="text-base font-medium text-blue-100">{quote}</p>
              <p className="mt-4 text-sm text-slate-300">{meta}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
