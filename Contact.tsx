import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-950 mt-3 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have a project in mind? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy-950 mb-6">Contact Information</h3>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'shaikh.jnas@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 82087 62904' },
                { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                      <div className="text-gray-700 font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 bg-navy-950 rounded-2xl border border-brand-500/20">
              <h4 className="font-display font-bold text-white mb-2">Ready to start?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Send us a message and let's explore how JNAS Enterprises can accelerate your goals.
                Our team typically responds within one business day.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-accent-400 text-xs font-medium">Currently accepting new projects</span>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent-500 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-navy-950 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thanks for reaching out. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 text-brand-500 hover:text-brand-600 font-medium text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-400 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-400 transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Engineering Design</option>
                    <option>AI Solutions</option>
                    <option>Data Analytics</option>
                    <option>Automation</option>
                    <option>Web Development</option>
                    <option>Business Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-400 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-70 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-brand-500/25"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
