import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';

const services = [
  { title: 'Product Discovery', description: 'Requirements workshops, user journeys, and technical planning for validated execution.' },
  { title: 'Frontend Engineering', description: 'Responsive, accessible interfaces using modern frameworks and design systems.' },
  { title: 'Backend & API Development', description: 'Secure APIs, cloud infrastructure, and integrations that scale with your business.' },
  { title: 'QA & Performance', description: 'Automated testing, manual QA, and optimization audits before every release.' },
  { title: 'Growth & Analytics', description: 'Event tracking, KPI dashboards, and experimentation support for growth teams.' },
  { title: 'Maintenance & Support', description: 'Post-launch improvements, bug fixes, and proactive system monitoring.' },
];

export default function ServicesPage() {
  return (
    <Section
      title="Our Services"
      subtitle="Flexible engagement models for startups, agencies, and enterprises."
      className="pt-12"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </Section>
  );
}
