import { Shield, Lightbulb, Users, Clock, TrendingUp, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of the curve — always integrating the latest technologies to keep you competitive.',
    accent: false,
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Security and reliability are baked into every solution, from architecture to deployment.',
    accent: true,
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'We work as an extension of your team, with open communication and full transparency.',
    accent: false,
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your timelines. Our agile process ensures milestones are met without compromise.',
    accent: true,
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Everything we build is designed to grow with your business — no costly re-builds down the line.',
    accent: false,
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: "Post-delivery, we're still with you. Ongoing support, monitoring, and optimization included.",
    accent: true,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-widest">Why JNAS</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just a vendor — we're a partner committed to your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl border border-white/10 hover:border-accent-500/40 bg-white/5 hover:bg-white/8 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${reason.accent ? 'bg-accent-500/20 group-hover:bg-accent-500/30' : 'bg-brand-500/20 group-hover:bg-brand-500/30'}`}>
                  <Icon className={`w-5 h-5 ${reason.accent ? 'text-accent-400' : 'text-brand-400'}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
