import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { businessConfig } from '../businessConfig'
import HowItWorks from '../components/HowItWorks'
import CTABanner from '../components/CTABanner'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease },
}

/* ─── SECTION 1 — HERO ─── */
function Hero() {
  return (
    <section
      style={{ background: '#1C3F3A', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
      className="pt-[120px] pb-12 px-6 lg:pt-[160px] lg:pb-20 lg:px-20"
    >
      {/* Decorative circle */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '420px', height: '420px', borderRadius: '9999px', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-120px', left: '40%', width: '280px', height: '280px', borderRadius: '9999px', background: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '720px', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '20px' }}>
          What We Offer
        </span>
        <h1 style={{ margin: 0, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          <span style={{ display: 'block', fontSize: 'clamp(44px,5vw,72px)', fontWeight: 300, color: 'white' }}>
            Cleaning, done
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(44px,5vw,72px)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontStyle: 'italic', color: 'white' }}>
            properly.
          </span>
        </h1>
        <p style={{ fontSize: '17px', fontWeight: 400, color: 'rgba(255,255,255,0.65)', maxWidth: '520px', lineHeight: 1.75, marginTop: '20px', marginBottom: 0 }}>
          From weekly upkeep to top-to-bottom deep cleans, every service is delivered by a trained, vetted team using eco-friendly products.
        </p>
      </div>
    </section>
  )
}

/* ─── SECTION 2 — SERVICES LIST ─── */
const cardVariants = {
  enter:  (dir) => ({ x: dir * 40, opacity: 0 }),
  center:           { x: 0,        opacity: 1 },
  exit:   (dir) => ({ x: dir * -40, opacity: 0 }),
}

const nameVariants = {
  enter:  (dir) => ({ x: dir * 20, opacity: 0 }),
  center:           { x: 0,        opacity: 1 },
  exit:   (dir) => ({ x: dir * -20, opacity: 0 }),
}

function ServicesList() {
  const services = businessConfig.services
  const [activeId, setActiveId]   = useState(services[0].id)
  const [direction, setDirection] = useState(1)
  const [expanded, setExpanded]   = useState(false)

  const tabsRef = useRef(null)
  const tabRefs = useRef({})

  const activeIndex   = services.findIndex(s => s.id === activeId)
  const svc           = services[activeIndex]

  const switchTo = (id) => {
    if (id === activeId) return
    const next = services.findIndex(s => s.id === id)
    setDirection(next > activeIndex ? 1 : -1)
    setActiveId(id)
    setExpanded(false)
  }

  // Center the active pill INSIDE the horizontal tabs scroller only.
  // Using scrollIntoView here scrolled the whole page vertically (it walks
  // every ancestor), which yanked the page mid-section on navigation.
  // Scrolling the container's scrollLeft never touches vertical page scroll.
  useEffect(() => {
    const container = tabsRef.current
    const el = tabRefs.current[activeId]
    if (!container || !el) return
    const elRect = el.getBoundingClientRect()
    const cRect  = container.getBoundingClientRect()
    const offset = container.scrollLeft + (elRect.left - cRect.left) - (cRect.width / 2) + (elRect.width / 2)
    container.scrollTo({ left: offset, behavior: 'smooth' })
  }, [activeId])

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80 && activeIndex < services.length - 1) switchTo(services[activeIndex + 1].id)
    else if (info.offset.x > 80 && activeIndex > 0)               switchTo(services[activeIndex - 1].id)
  }

  return (
    <section style={{ background: '#EBEBE6', padding: '112px 0', overflow: 'hidden' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div {...fadeUp} style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C3F3A', display: 'block', marginBottom: '14px' }}>
            Our Services
          </p>
          <h2 style={{ lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
            <span style={{ display: 'block', fontSize: 'clamp(36px,4vw,48px)', fontWeight: 300, color: '#0A0C29' }}>
              Precision-driven
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(36px,4vw,48px)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontStyle: 'italic', color: '#1C3F3A' }}>
              cleaning solutions.
            </span>
          </h2>
        </motion.div>

        {/* Pill tabs */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          ref={tabsRef}
          style={{ gap: '8px', marginBottom: '24px', overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', paddingBottom: '2px' }}
          className="no-scrollbar hidden lg:flex"
        >
          {services.map(s => {
            const on = s.id === activeId
            return (
              <button
                key={s.id}
                ref={el => { tabRefs.current[s.id] = el }}
                onClick={() => switchTo(s.id)}
                style={{
                  padding: '9px 22px', borderRadius: '9999px', flexShrink: 0,
                  border: on ? 'none' : '1px solid #e5e7eb',
                  background: on ? '#1C3F3A' : 'white',
                  color: on ? 'white' : '#0A0C29',
                  fontSize: '14px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                  boxShadow: on ? '0 2px 10px rgba(28,63,58,0.28)' : 'none',
                  transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => { if (!on) { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' } }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; if (!on) e.currentTarget.style.boxShadow = 'none' }}
              >
                {s.name}
              </button>
            )
          })}
        </motion.div>

        {/* ── DESKTOP CARD ── */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.22 }}
          className="hidden lg:block"
          style={{ position: 'relative', minHeight: '460px' }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeId}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease }}
              style={{ display: 'flex', borderRadius: '20px', overflow: 'hidden', background: 'white', boxShadow: '6px 6px 0px #1C3F3A', minHeight: '460px' }}
            >
              {/* LEFT 55% — content */}
              <div style={{ width: '55%', padding: '48px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1C3F3A', opacity: 0.5, display: 'block', marginBottom: '12px', letterSpacing: '0.05em' }}>
                    {svc.number}
                  </span>
                  {svc.badge && (
                    <span style={{ display: 'inline-block', marginBottom: '14px', padding: '4px 14px', borderRadius: '9999px', background: '#E8F1EE', color: '#1C3F3A', fontSize: '12px', fontWeight: 600 }}>
                      {svc.badge}
                    </span>
                  )}
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 700, color: '#0A0C29', lineHeight: 1.2 }}>
                    {svc.name}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '22px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontStyle: 'italic', color: '#1C3F3A', lineHeight: 1.3 }}>
                    {svc.subtitle || svc.oneliner}
                  </p>
                  <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: '#6b7280', lineHeight: 1.75 }}>
                    {svc.description}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {svc.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#1C3F3A', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#0A0C29' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '36px' }}>
                  <Link
                    to={businessConfig.ctaPrimary.link}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#1C3F3A', color: 'white', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '9999px', textDecoration: 'none', transition: 'background 0.2s ease, transform 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#142e2a'; e.currentTarget.style.transform = 'scale(1.02)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#1C3F3A'; e.currentTarget.style.transform = 'scale(1)' }}
                  >
                    {businessConfig.ctaPrimary.label} →
                  </Link>
                </div>
              </div>

              {/* RIGHT 45% — image */}
              <div style={{ width: '45%', position: 'relative', overflow: 'hidden' }}>
                <img src={svc.image} alt={svc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,41,0.55) 0%, transparent 55%)', pointerEvents: 'none' }} />
                {svc.price && (
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'white', padding: '10px 20px', borderRadius: '9999px', boxShadow: '4px 4px 0px #1C3F3A', fontSize: '14px', fontWeight: 700, color: '#0A0C29' }}>
                    From {svc.price} / visit
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── MOBILE CARD + DOTS ── */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.22 }}
          className="lg:hidden"
        >
          {/* ── Mobile arrow navigator ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px', marginBottom: '20px' }}>
            {/* Prev */}
            <button
              onClick={() => activeIndex > 0 && switchTo(services[activeIndex - 1].id)}
              style={{
                width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                border: '1.5px solid #1C3F3A', color: '#1C3F3A', background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', cursor: activeIndex === 0 ? 'default' : 'pointer',
                opacity: activeIndex === 0 ? 0.3 : 1, transition: 'opacity 0.2s ease',
              }}
            >
              ←
            </button>

            {/* Center — service name + counter, slides on change */}
            <div style={{ flex: 1, textAlign: 'center', overflow: 'hidden', padding: '0 16px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeId}
                  custom={direction}
                  variants={nameVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#0A0C29', lineHeight: 1.2 }}>
                    {svc.name}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 400, color: '#6b7280', letterSpacing: '0.1em', marginTop: '3px' }}>
                    {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              onClick={() => activeIndex < services.length - 1 && switchTo(services[activeIndex + 1].id)}
              style={{
                width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                border: '1.5px solid #1C3F3A', color: '#1C3F3A', background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', cursor: activeIndex === services.length - 1 ? 'default' : 'pointer',
                opacity: activeIndex === services.length - 1 ? 0.3 : 1, transition: 'opacity 0.2s ease',
              }}
            >
              →
            </button>
          </div>

          {/* Drag wrapper persists across service changes so gesture state is never reset */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.06}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'pan-y', cursor: 'grab' }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeId}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease }}
                style={{ borderRadius: '20px', overflow: 'hidden', background: 'white', boxShadow: '6px 6px 0px #1C3F3A' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={svc.image} alt={svc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,41,0.55) 0%, transparent 55%)', pointerEvents: 'none' }} />
                  {svc.price && (
                    <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'white', padding: '7px 14px', borderRadius: '9999px', boxShadow: '4px 4px 0px #1C3F3A', fontSize: '13px', fontWeight: 700, color: '#0A0C29' }}>
                      From {svc.price} / visit
                    </div>
                  )}
                </div>
                {/* Content */}
                <div style={{ padding: '20px 20px 24px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1C3F3A', opacity: 0.5, display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>{svc.number}</span>
                  {svc.badge && (
                    <span style={{ display: 'inline-block', marginBottom: '8px', padding: '3px 10px', borderRadius: '9999px', background: '#E8F1EE', color: '#1C3F3A', fontSize: '11px', fontWeight: 600 }}>{svc.badge}</span>
                  )}
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: 700, color: '#0A0C29', lineHeight: 1.2 }}>{svc.name}</h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '17px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontStyle: 'italic', color: '#1C3F3A' }}>
                    {svc.subtitle || svc.oneliner}
                  </p>
                  <p style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#6b7280', lineHeight: 1.7, ...(expanded ? {} : { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }) }}>
                    {svc.description}
                  </p>
                  <ul style={{ listStyle: 'none', margin: '12px 0 20px', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {svc.features.slice(0, expanded ? undefined : 3).map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#1C3F3A', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '13px', fontWeight: 500, color: '#0A0C29' }}>{f}</span>
                      </li>
                    ))}
                    {!expanded && svc.features.length > 3 && (
                      <li>
                        <button onClick={() => setExpanded(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#1C3F3A', fontWeight: 600, padding: 0, textDecoration: 'underline' }}>
                          + {svc.features.length - 3} more
                        </button>
                      </li>
                    )}
                  </ul>
                  <Link
                    to={businessConfig.ctaPrimary.link}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', background: '#1C3F3A', color: 'white', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '9999px', textDecoration: 'none' }}
                  >
                    {businessConfig.ctaPrimary.label} →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Progress bar */}
          <div style={{ marginTop: '20px', height: '3px', background: '#e5e7eb', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
              layout
              style={{ height: '100%', background: '#1C3F3A', borderRadius: '2px', width: `${((activeIndex + 1) / services.length) * 100}%` }}
              transition={{ duration: 0.4, ease }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── SECTION 4 — FAQ ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-28" style={{ background: '#E9EAE8' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — label + headline + CTA */}
          <motion.div {...fadeUp}>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C3F3A', display: 'block', marginBottom: '16px' }}>
              FAQ
            </span>
            <h2 style={{ lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 16px 0' }}>
              <span style={{ display: 'block', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 300, color: '#0A0C29' }}>
                Your questions,
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(32px,4vw,48px)', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontStyle: 'italic', color: '#1C3F3A' }}>
                our answers.
              </span>
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 400, color: '#6b7280', lineHeight: 1.75, maxWidth: '340px', margin: '0 0 32px 0' }}>
              Have questions about our cleaning services? We&apos;re here to make everything clear.
            </p>
            <a
              href={`tel:${businessConfig.phone}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#1C3F3A', color: 'white', fontWeight: 600, fontSize: '14px', padding: '12px 24px', borderRadius: '9999px', textDecoration: 'none', transition: 'background 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#142e2a' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1C3F3A' }}
            >
              <i className="fa-solid fa-phone text-xs" />
              Call {businessConfig.phone}
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            {businessConfig.faq.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: isOpen ? 'none' : '1px solid #d1d5db',
                    padding: '20px 0',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontSize: '16px', fontWeight: 600, paddingRight: '16px',
                      color: isOpen ? '#1C3F3A' : '#0A0C29',
                      transition: 'color 0.3s ease',
                    }}>
                      {item.q}
                    </span>
                    <span style={{
                      fontSize: '24px', fontWeight: 300, color: '#1C3F3A',
                      flexShrink: 0, lineHeight: 1, display: 'inline-block',
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}>
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, backgroundColor: '#E9EAE8' }}
                        animate={{ height: 'auto', opacity: 1, backgroundColor: '#1C3F3A' }}
                        exit={{ height: 0, opacity: 0, backgroundColor: '#E9EAE8' }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden', borderRadius: '0 0 12px 12px' }}
                      >
                        <p style={{ fontSize: '15px', color: 'white', lineHeight: 1.7, margin: 0, padding: '16px 24px 20px 24px' }}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ─── */
export default function Services() {
  return (
    <>
      <Hero />
      <ServicesList />
      <HowItWorks />
      <FAQ />
      <CTABanner />
    </>
  )
}
