import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Multi-disciplinary team of engineers, data scientists, and strategists',
  'Proven track record across industries: manufacturing, healthcare, fintech, and more',
  'Agile delivery model with transparent communication at every step',
  'Full lifecycle ownership — from ideation to deployment and support',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-950 mt-3 mb-6">
              Built on Expertise,{' '}
              <span className="text-brand-500">Driven by Innovation</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              JNAS Enterprises is a technology and engineering firm dedicated to helping businesses
              unlock their full potential. We combine deep domain knowledge with the latest tools to
              deliver solutions that are practical, scalable, and impactful.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you need a sophisticated AI model, an automated workflow, or a custom web platform,
              our team brings the expertise and commitment to make it happen — on time and within budget.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '50+', label: 'Projects Delivered', color: 'bg-brand-500' },
                { number: '98%', label: 'Client Satisfaction', color: 'bg-accent-500' },
                { number: '5+', label: 'Years of Experience', color: 'bg-brand-700' },
                { number: '12+', label: 'Industries Served', color: 'bg-navy-950' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-4xl font-display font-bold text-navy-950 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                  <div className={`mt-3 h-1 w-8 ${stat.color} rounded-full mx-auto`} />
                </div>
              ))}
            </div>
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
