import { useState } from 'react'

const faqs = [
  { q: 'What cleaning services do you offer?' },
  {
    q: 'Do I need to provide cleaning supplies equipment?',
    a: "No, you don't need worry about supplies. Our team arrives fully equipped with professional-grade, eco-friendly cleaning products and tools.",
    active: true,
  },
  { q: 'Are your cleaners trained and insured?' },
  { q: 'How do I book a cleaning service?' },
  { q: 'What if I need to reschedule or cancel?' },
  { q: 'Do you offer eco-friendly or green cleaning options?' },
]

const answers = {
  'What cleaning services do you offer?': 'We offer a full range of cleaning services including residential deep cleaning, commercial & office cleaning, move-in/move-out cleaning, window & glass cleaning, and post-construction cleaning.',
  'Do I need to provide cleaning supplies equipment?': "No, you don't need worry about supplies. Our team arrives fully equipped with professional-grade, eco-friendly cleaning products and tools.",
  'Are your cleaners trained and insured?': 'Yes! All of our cleaners are thoroughly vetted, professionally trained, and fully insured. You can have complete peace of mind when our team enters your home or office.',
  'How do I book a cleaning service?': 'You can book online through our contact form, or simply give us a call at 775-229-3115. We\'ll schedule a time that works best for you.',
  'What if I need to reschedule or cancel?': 'We understand that schedules change. You can reschedule or cancel your appointment up to 24 hours before the service without any penalty.',
  'Do you offer eco-friendly or green cleaning options?': 'Absolutely! We use eco-friendly, plant-based cleaning solutions that are non-toxic and completely safe for your family, pets, and the environment.',
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-navy font-semibold mb-4">
              <i className="fa-regular fa-circle-question" /> FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Your Questions, Our Answers<br />Clear, Honest And Helpful
            </h2>
            <p className="text-muted mb-12">
              Have questions about our cleaning services? We here to make everything clear. From booking and pricing
            </p>

            {/* Still Have Questions Card */}
            <div className="bg-white p-8 rounded-2xl border border-surface-dim flex items-center gap-6 card-shadow">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-headset text-2xl text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-navy mb-2">Still Have Questions</h4>
                <p className="text-sm text-muted mb-4">Still have questions about our cleaning services? We're here to help!</p>
                <a
                  href="tel:7752293115"
                  className="btn-primary w-full py-3 rounded-xl font-medium text-center block text-white"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>

          {/* Right - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              const answer = answers[faq.q]
              return (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-white border border-surface-dim'
                  }`}
                >
                  <button
                    className="w-full px-6 py-4 flex justify-between items-center font-bold text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className={isOpen ? 'text-white' : 'text-navy'}>
                      {faq.q}
                    </span>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-up text-white' : 'fa-chevron-down text-muted'} text-sm ml-4 flex-shrink-0`} />
                  </button>
                  {isOpen && answer && (
                    <div className="px-6 pb-4 text-sm text-white/90">
                      {answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
