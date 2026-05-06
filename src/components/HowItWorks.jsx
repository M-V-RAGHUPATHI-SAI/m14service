import { useState, useEffect } from 'react'

const steps = [
  {
    number: '01',
    title: 'Book Your Cleaning',
    desc: 'Schedule your service online or by phone. Choose the time, date, and type of cleaning that suits your needs.',
    img: './howitworks1.jpg',
  },
  {
    number: '02',
    title: 'We Arrive & Inspect',
    desc: 'Our professional team arrives on time, inspects your space, and prepares all the required cleaning supplies.',
    img: './howitworks3.jpg',
  },
  {
    number: '03',
    title: 'Deep Cleaning Begins',
    desc: 'We clean every corner with care - dusting, vacuuming, mopping, and sanitizing to ensure a spotless environment.',
    img: './howitworks4.jpg',
  },
  {
    number: '04',
    title: 'Final Check & Satisfaction',
    desc: 'We perform a final walkthrough to ensure everything meets your expectations. Your satisfaction is our priority.',
    img: './howitworks2.jpg',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step-index'))
            setActiveStep(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    )

    document.querySelectorAll('.step-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="lg:sticky lg:top-32 h-fit self-start">
            <div className="flex items-center gap-2 text-navy font-semibold mb-4">
              <i className="fa-solid fa-gear" /> How It Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
              Our Cleaning Process Simple Steps To A Spotless Space
            </h2>
            <a href="#contact" className="btn-primary px-8 py-3 rounded-full font-semibold inline-block mb-12">
              Discover More
            </a>

            {/* Step Tabs */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => {
                    const el = document.getElementById(`step-${i}`);
                    if (el) {
                      const offset = 120; // Account for fixed navbar
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 text-left ${
                    activeStep === i
                      ? 'bg-accent text-white shadow-lg shadow-accent/30'
                      : 'text-muted hover:bg-surface'
                  }`}
                >
                  <span className="font-bold">{step.number}</span>
                  <span className="font-medium">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Step Details */}
          <div className="space-y-24 pb-32">
            {steps.map((step, i) => (
              <div
                key={step.number}
                id={`step-${i}`}
                data-step-index={i}
                className={`step-item transition-all duration-700 ${
                  activeStep === i ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-12'
                }`}
              >
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    alt={step.title}
                    className="w-full object-cover h-[400px] transition-transform duration-700 group-hover:scale-105"
                    src={step.img}
                  />
                  <div className="absolute top-6 left-6 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl font-bold text-navy mb-4">{step.title}</h3>
                  <p className="text-lg text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
