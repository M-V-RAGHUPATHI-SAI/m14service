import { useState } from 'react'

const testimonials = [
  {
    name: 'Alex Buckmaster',
    role: 'Happy Customer',
    quote: '"Hands down best cleaning service we\'ve ever used! My home has never looked this immaculate. Professional, friendly, and efficient — they truly go above and beyond."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOLv6E4vF3bD5mbX3I6t0yLeF8ncxIaGZCqjUMQsPB06NNgS7FqD2mvhl_oKUXdCvgsmpIjtIZesWk23YPkgBRCOBm8KXzpV1QdA6BuiFphLe4m_inieSoNsmUetf-WdBKiiC8Isv0KDJqcPfseWW_CoGS9Ak8c2deVqTgvhyc8L2LXp6vOc1477eXYqSKRmQ6WybF8p17wK55nGjRe2xO_A4tOUqsFs57xoTZA3hgXnYTYxxqAPufvz6uHNVrzSXZ90TOb1x8forA',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb-GT9Fa6C-Dq906qT291L8uR7qfKz7-cu2BuTG2kerOLMHqkgd8O4zGdOWC-sDAwFsP8caDrXVSW_Nns_yjppNpppAB-ghzsjIQc9NogKiGuMHVm85-qMM6rsQhj3jI4tdBzTzkI4X0-KEF5Slu8_Jd1vl2u7xODoXnRKP94vKEYP6M3oHMvDyQzGQY3tPjWj9HvZXSlro36JfSvQm8ZgCjrrpUNx7-RziNTveCqRlhdRV_TEGdsGcQnaNHvMPfqjiOqcSssIZ8B',
    stars: 5,
  },
  {
    name: 'Rodger Struck',
    role: 'Happy Customer',
    quote: '"Our office has never felt on more welcoming! The team is thorough, reliable, detail-oriented. They transform spaces with precision and care highly recommended!"',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Dalkmo1XKNqJyztnP6feps4yN6H1h9m4kYhvMN8E2SlkqLTj7WOlbakNdt303bMRAbCD812QwF5gVCeyWdR7qmt8CggKLMY8day2GccVw0F95dNJF1PLJA4RJ6o5mm3prTrJWHRhTUve2NTj-JKKY7jlj86Vb4AE02edbnxxusmoaakhywfCJrMKG8PGWs-fsChMsQe7g_e92DFYlWETV_nfuRiZlz8z8MGPynWOVifSjSBw568hgZ0-NWQ8qRCCmITbWbtf97_D',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcANQTQ86RvCguTHH4gWroLIg91Tqt2IB2RZ8zKpKFIUp_dwXzGnfyeARHwMq5nqJTw-4Cx45bNoKRxhn6baFttJl3bFWk4hEizWRxb-qXeUY6uIo5nmVf7JFO_lKuBUGn63u8JOlK5d3CGnG2v3FEtP157-JkeOhVAJo4py0jfqZQGD0-XciB1qYMq1oZ9aIKSv-cGXbfDDPC8-MveZfbs5GhT46g5ZrDVDwsI_kKNZIMc5y66BRTGiGAE8L3uXNlUJYBYLrP4EUC',
    stars: 4.5,
  },
  {
    name: 'Stephanie Nicol',
    role: 'Happy Customer',
    quote: '"Moving out was stressful, but this cleaning crew made it effortless. Every nook and cranny was spotless, and they even handled the toughest spots with ease."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm-IFQsnNMiBWAl5EOXpX1g8HVBpZzTqtR3Y5JrJwP6BjQ7WQE_8eTS6c1w2yl754heNYQx80jglR9a59w6J2-mx2Qz5fN2Sa_rEDnaEojgnh5FPbgsadZ5uuCgyip6NKqhlrs0DND93Bgn3r9Kt8QSnITOFlIJQqTB1qbzESfxr2T_FbaeiZg5L1Hd8ceK2qmv8SLfd6S18OyxVhvjCXS6nIwl0l4QEIn9rqU-0JMizmrI1XiZs5mihFEN6UiwLSX8JAEh7DjX9s5',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhLGQx6Pl8PQsUJXhiFF5SKpZp2H7DkmWC_v5Zu3MTVG7ksup62hplVIPQOOhTjnG2okehgCFw1n2mkylwPXUQDPDz8hZUI3bIf7kaIPRjo1pP35oYmyrCVZlHUW61N2qSNSslrIHo_JeUf_gKElxVafqemQSa9Eu6PdzdXDSWvZzErw283jNy3LCVWrjB1rk1CBuFmcMzJak6PvswZ5zlKh7UhtzRaZdSoHl0sEJTw1QPSrcLnuTevvIxmoCmk4quIeinIX0M4nal',
    stars: 5,
  },
]

function Stars({ count }) {
  const full = Math.floor(count)
  const half = count % 1 !== 0
  return (
    <div className="flex text-yellow text-sm">
      {[...Array(full)].map((_, i) => (
        <i key={i} className="fa-solid fa-star" />
      ))}
      {half && <i className="fa-solid fa-star-half-stroke" />}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-padding bg-navy text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-white/80 font-medium mb-4 text-sm">
          <i className="fa-solid fa-quote-left" /> Testimonials
        </div>
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setActive(i)}
              className={`bg-white/10 p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                active === i ? 'border-white/30 shadow-lg shadow-white/5' : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Top row */}
              <div className="flex justify-between items-center mb-6">
                <Stars count={t.stars} />
                <img alt="Company Logo" className="h-6 opacity-70" src={t.logo} />
              </div>

              <p className="text-white/90 mb-8 leading-relaxed">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                  src={t.avatar}
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
