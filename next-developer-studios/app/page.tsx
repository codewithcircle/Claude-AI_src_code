import Link from 'next/link';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';

const serviceCategories = [
  { title: 'Web Development', description: 'Modern websites, portals, and scalable web applications built for speed and conversion.' },
  { title: 'Mobile Apps', description: 'Cross-platform and native mobile experiences for startups, enterprises, and digital products.' },
  { title: 'UI/UX Design', description: 'User-first interfaces, design systems, and prototypes that improve engagement and usability.' },
  { title: 'Automation & AI', description: 'Workflow automation, AI integrations, and process optimization to reduce manual work.' },
];

export default function HomePage() {
  return (
    <>
      <Section className="pt-14 sm:pt-16 lg:pt-20">
        <div className="card text-center">
          <p className="inline-block rounded-full border border-primary/40 px-4 py-1 text-xs uppercase tracking-[0.2em] text-primary">Trusted Software Partner Network</p>
          <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Build faster with vetted developers and project-ready teams.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300 sm:text-base lg:text-lg">
            Developer Studios connects clients with top freelancers across product design, engineering, and support—managed with clear milestones and transparent delivery.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/request" className="btn-primary">Start a Project</Link>
            <Link href="/freelancer-register" className="btn-secondary">Join as Freelancer</Link>
          </div>
        </div>
      </Section>

      <Section title="Service Categories" subtitle="Pick specialized services or combine multiple tracks for full product delivery.">
        <div className="grid gap-4 sm:grid-cols-2">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </Section>

      <Section title="How it Works" subtitle="Simple and transparent flow from request to delivery.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['1. Submit Request', 'Tell us your goals, timeline, and required skills through the request form.'],
            ['2. Match & Plan', 'We match you with vetted freelancers and propose milestones and budget options.'],
            ['3. Build & Launch', 'Track progress weekly, review deliverables, and launch with confidence.'],
          ].map(([title, description]) => (
            <article key={title} className="card">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Testimonials" subtitle="What clients say about working with Developer Studios.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['SaaS Founder', '“The team shipped our MVP in six weeks with exceptional communication and code quality.”'],
            ['Agency Director', '“The freelancer matching was accurate and saved us months of hiring overhead.”'],
            ['E-commerce Manager', '“Fast turnaround, polished UX, and a smooth launch process from start to finish.”'],
          ].map(([name, quote]) => (
            <article key={name} className="card">
              <p className="text-sm text-slate-200">{quote}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-primary">{name}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
