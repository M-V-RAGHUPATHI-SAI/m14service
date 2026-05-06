import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-navy font-semibold mb-4">
            <i className="fa-solid fa-envelope" /> Contact Us
          </div>
          <h2 className="text-4xl font-bold text-navy leading-tight mb-4">
            Schedule Your Cleaning Today
          </h2>
          <p className="text-muted text-base leading-relaxed">
            At M14 Service we provide professional cleaning services for homes and offices. Our team is dedicated to making every space spotless, healthy, and welcoming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Info */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-dim">
              <h3 className="font-bold text-navy text-lg mb-5 flex items-center gap-2">
                <i className="fa-solid fa-clock text-accent" /> Working Hours
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { days: 'Mon – Wed', hours: '8:00 AM – 7:00 PM' },
                  { days: 'Thu – Sat', hours: '8:00 AM – 5:00 PM' },
                  { days: 'Sunday', hours: 'Full Day Closed' },
                ].map((h) => (
                  <li key={h.days} className="flex justify-between border-b border-surface-dim pb-2 last:border-0 last:pb-0">
                    <span className="font-bold text-navy">{h.days}</span>
                    <span className={h.hours.includes('Closed') ? 'text-muted' : 'text-muted'}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-dim">
              <h3 className="font-bold text-navy text-lg mb-5 flex items-center gap-2">
                <i className="fa-solid fa-address-book text-accent" /> Contact Info
              </h3>
              <ul className="space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <i className="fa-solid fa-phone text-accent mt-1" />
                  <a href="tel:447723819014" className="hover:text-accent transition-colors">+44 7723 819014</a>
                </li>
                <li className="flex gap-3">
                  <i className="fa-solid fa-location-dot text-accent mt-1" />
                  <span>Manchester, UK</span>
                </li>
                <li className="flex gap-3">
                  <i className="fa-solid fa-envelope text-accent mt-1" />
                  <a href="mailto:m14service.uk@gmail.com" className="hover:text-accent transition-colors">m14service.uk@gmail.com</a>
                </li>
                <li className="flex gap-3">
                  <i className="fa-solid fa-globe text-accent mt-1" />
                  <a href="mailto:info@m14service.com" className="hover:text-accent transition-colors">info@m14service.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 card-shadow border border-surface-dim">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-navy mb-2">Booking Request Sent!</h3>
                <p className="text-muted text-sm">We'll confirm your appointment within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-navy mb-1">Schedule Your Cleaning</h3>
                <p className="text-sm text-muted mb-2">Fill in your details and we'll get back to you promptly.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">Full Name *</label>
                    <input
                      required name="name" value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">Phone</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="775-000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">Email *</label>
                  <input
                    required type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">Service</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-text"
                  >
                    <option value="">Select a service…</option>
                    <option>Commercial &amp; Office Cleaning</option>
                    <option>Move-In / Move-Out Cleaning</option>
                    <option>Window &amp; Glass Cleaning</option>
                    <option>Post-Construction Cleaning</option>
                    <option>Residential Deep Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={3} placeholder="Tell us about your space…"
                    className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
