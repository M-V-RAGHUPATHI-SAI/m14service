import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 text-white transition-all duration-500 ${
        scrolled
          ? 'bg-navy shadow-lg shadow-navy/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2">
            <img src="/logom14.jpg" alt="M14 Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold text-2xl tracking-tight">M14 Service</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-accent transition-colors font-medium flex items-center gap-1"
              >
                {l.label}
                {l.hasDropdown && (
                  <i className="fa-solid fa-chevron-down text-xs" />
                )}
              </a>
            ))}
          </div>

          {/* Call Action */}
          <div className="hidden lg:flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
            <div className="bg-white text-navy rounded-full w-8 h-8 flex items-center justify-center">
              <i className="fa-solid fa-phone text-sm" />
            </div>
            <div className="text-sm">
              <p className="text-white/80 text-xs">Call Now</p>
              <a href="tel:+447723819014" className="font-bold hover:text-accent transition-colors">+44 7723 819014</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-accent focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-2xl`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-navy/95 backdrop-blur-lg ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:7752293115"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-accent text-white text-sm font-bold rounded-lg text-center"
          >
            Call 775-229-3115
          </a>
        </div>
      </div>
    </nav>
  )
}
