import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-navy font-semibold mb-4">
            <i className="fa-solid fa-envelope" /> Contact Us
          </div>
          <h2 className="text-4xl font-bold text-navy mb-6">Let’s Start Your Cleaning Project Today</h2>
          <p className="text-muted text-base leading-relaxed">
            At M14 Service we provide professional cleaning services for homes and offices. Our team is dedicated to making every space spotless, healthy, and welcoming.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Working Hours */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-surface border border-surface-dim"
            >
              <h3 className="font-bold text-navy text-lg mb-5 flex items-center gap-2">
                <i className="fa-solid fa-clock text-accent" /> Working Hours
              </h3>
              <ul className="space-y-3">
                {[
                  { day: 'Monday – Friday', hours: '08:00am – 05:00pm' },
                  { day: 'Saturday', hours: '10:00am – 03:00pm' },
                  { day: 'Sunday', hours: 'Closed', closed: true }
                ].map((item) => (
                  <li key={item.day} className="flex justify-between text-sm">
                    <span className="text-muted">{item.day}:</span>
                    <span className={`font-bold ${item.closed ? 'text-accent' : 'text-navy'}`}>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-surface border border-surface-dim"
            >
              <h3 className="font-bold text-navy text-lg mb-5 flex items-center gap-2">
                <i className="fa-solid fa-address-book text-accent" /> Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-sm text-navy font-medium">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent border border-surface-dim">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <span>Unit 12, Manchester Business Park, M22 5TG</span>
                </li>
                <li className="flex items-center gap-4 text-sm text-navy font-medium">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent border border-surface-dim">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <a href="tel:+447723819014" className="hover:text-accent transition-colors">+44 7723 819014</a>
                </li>
                <li className="flex items-center gap-4 text-sm text-navy font-medium">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent border border-surface-dim">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <a href="mailto:info@m14service.com" className="hover:text-accent transition-colors">info@m14service.com</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 card-shadow border border-surface-dim"
          >
            <AnimatePresence mode='wait'>
              {sent ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Booking Request Sent!</h3>
                  <p className="text-muted text-sm">We'll confirm your appointment within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-xl font-bold text-navy mb-1">Schedule Your Cleaning</h3>
                  <p className="text-sm text-muted mb-2">Fill in your details and we'll get back to you promptly.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-semibold text-navy mb-1">Full Name *</label>
                      <input
                        required name="name" value={form.name} onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-semibold text-navy mb-1">Phone</label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="775-000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-xs font-semibold text-navy mb-1">Email *</label>
                    <input
                      required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-xs font-semibold text-navy mb-1">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={3} placeholder="Tell us about your space…"
                      className="w-full px-4 py-3 rounded-lg border border-surface-dim text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-accent/20 transition-all duration-200"
                  >
                    Submit Booking Request
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
