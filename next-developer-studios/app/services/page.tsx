import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Product Engineering',
    description: 'End-to-end development for MVPs and scale-stage products.',
    items: ['Architecture planning', 'TypeScript implementation', 'Cloud deployment']
  },
  {
    title: 'Creative & UX Design',
    description: 'User-centered experiences aligned to business goals and conversion metrics.',
    items: ['UX audits', 'UI systems', 'Responsive prototyping']
  },
  {
    title: 'Operations & Support',
    description: 'Continuous delivery services for healthy, high-performing products.',
    items: ['Maintenance retainers', 'Analytics insights', 'Feature iteration']
  }
];

export default function ServicesPage() {
  return (
    <Section title="Services" subtitle="Choose a track or combine multiple services for your project roadmap.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
