import { Cpu, Brain, BarChart3, Bot, Globe, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Engineering Design',
    description:
      'Precision engineering solutions from concept to production-ready designs. We handle complex system architecture, CAD modeling, and technical documentation.',
    gradient: 'from-brand-500 to-accent-500',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description:
      'Custom artificial intelligence models, machine learning pipelines, and intelligent automation systems tailored to your business needs.',
    gradient: 'from-purple-500 to-brand-500',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Turn raw data into actionable insights. We build dashboards, run advanced analytics, and create predictive models that drive smarter decisions.',
    gradient: 'from-accent-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'Automation',
    description:
      'Streamline operations with intelligent automation. From RPA workflows to full process orchestration, we reduce manual effort and boost efficiency.',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Modern, performant web applications built with the latest technologies. Responsive design, seamless UX, and rock-solid backend architecture.',
    gradient: 'from-brand-600 to-accent-500',
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description:
      'Strategic guidance to help your enterprise innovate and scale. We analyze your operations, identify opportunities, and build roadmaps for growth.',
    gradient: 'from-navy-950 to-brand-700',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-950 mt-3 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            End-to-end solutions across engineering, technology, and business — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-200 bg-white hover:shadow-xl hover:shadow-brand-500/8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-950 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
