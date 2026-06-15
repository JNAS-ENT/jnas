import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          <span className="text-accent-300 text-sm font-medium">Intelligent Enterprise Solutions</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
          Transforming Ideas into
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">
            Intelligent Solutions
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          JNAS Enterprises delivers cutting-edge Engineering Design, AI Solutions, Data Analytics,
          Automation, Web Development, and Business Consulting.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#services"
            className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-lg shadow-brand-500/30"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/20 hover:border-accent-400/50 text-white hover:text-accent-300 px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:bg-white/5"
          >
            Talk to Us
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-display font-bold ${i === 1 ? 'text-accent-400' : 'text-white'}`}>{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent-400 transition-colors animate-float"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
