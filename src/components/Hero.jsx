import { useEffect, useState } from 'react'

const avatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDRJeHD18gmcdypPgQy1VQBMIyX_353IVZmTolkj01DEQNit0PNJ1BvJ9tKXd2GF8ie5VraWXEgnGyho5cyjhHLkV5W2W1_3e7NM4ZcdGWMFCRJgYXnmgU-EBa20_RaFwsMXPlBHLuPpMhNzEKs_9RahiU_gXe4YjXzuQCK6ejIPjEQ7_HWAhvpTMgL7ABEROpya36xZAd_slwTCAsadh8FZulBQ7XkkenRXtxFS7N8vBr8nIB0jqrSsHMbZksSVFZJ4WLLJPU0SNmG',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCFWZqSv5BbI5SMwxeL-V1p9SRkPeq5OYnqgl6hLgcD5_wK-k_tVNF5K8zXNPQk5cogfzW29JLJtYBPsPTmO4SASw33aIDbpPSUUFZFx1aoLVBzEK8_hcJg1MYWekOKgDqjT0LpWKFOkwGd49J1N-BZYdelj2v_OwhW97wZPInoDQRlxBeiIiW6z8LYlwmLM7FMQaYaC-X_h-LcHD6YpMwF4Rp2dZtlf4lAFCZAHoHGFXEQpqlvaxiXamQTQYxGO3K11PaDRV7qvGI0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBqdvVsRkseEFlg_WJC1B2zINlRnjbhK4GjHofis4u4JyTMK7tHPqnQPgxNpjHLX3N4CQbBMLW5f3Osn6gTeHGU_T21GRkUqCQ7yf5dyF_mKU09O5B30h-nfM9NfD-n2Exy6ubfpDkcn0pSlxrHNie11Liu77CwEgllj44nPX9gnORMQSYpryXlD_o1KjcY7dHv-CzGp3lvgTyn_Nwjysbv6csO_gV7MXp1cc8Qhn8ijGgZk9sQ_CRoYxdgaw-ItXRoJEYW_ZytSNSl',
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <header id="home" className="hero-bg text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-medium">
              <i className="fa-solid fa-sparkles text-yellow" />
              Spotless Spaces, Stress-Free Living
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1]">
              Bringing Shine & Freshness to Every Space
            </h1>

            <p className="text-lg text-white/90 max-w-xl leading-relaxed">
              Whether it&apos;s a one-time deep clean or regular upkeep, we&apos;re here to make your home feel brand new, every single visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="#contact"
                className="bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-surface transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Our Cleaning Today
              </a>

              {/* Rating Group */}
              <div className="flex items-center gap-4 ml-2">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      alt={`User ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-navy object-cover"
                      src={src}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow text-xs gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                    <span className="text-white ml-1 font-bold">5.0</span>
                  </div>
                  <p className="text-white/80 text-xs">Rated Best Over 15.7k Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative hidden lg:block transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <img
              alt="Professional Cleaner"
              className="w-full h-auto max-h-[600px] object-contain relative z-10 drop-shadow-2xl rounded-2xl"
              src="/hero-cleaner-fixed.png"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
