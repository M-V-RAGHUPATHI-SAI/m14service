const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClGZib-ZYXM1T_AtvPUSwYvZqRqXXoQZ8p9PGxte1Ij9-ymGLyywNsvwZcjR6apsZaFBpVXGNbE0l_v3EYkdhP8WOEF40XNZkjhBEWXzw3MUPabo0yQOOifGGyv1-LNAe_8IB93XhfRbY9FYKyIlS6NsrncNKIc2jZkTcJXZJrqHRyR0oYM6vj0hxKKbk6w2vhq5wzufVL1o39H1HUL3HRrd6tRAFa-bHee66zli95QECble-thopME-QOOQClToQamNfBNq3tgD2r',
    icon: 'fa-solid fa-shield-halved',
    label: 'Built on Trust, Powered by Service',
    alt: 'Trust Service',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABYGcMPH13l3uQBuBTxz9KXpdKc-6_Zd5SdyDc8EEYEH5YBpTmKag_QcEk6ILJ8gtlPrnSwJGc-SUWDk3XJgoICYicvVUUxubvy0z6oWhkHSLfVrf9Hc05zq-_-Vu2pUI86_f5G-FYvrnySh1tpAU2Ew8neh82RwqZGZ_ZkDArT9HEIEOOlY9azOTaOnTUesalQfVbTWSUbV4I8osLNfJsMRp24wwqDa2WmokZYZP_GeYf-5-SefZqflHjc3ziNZgt98nU3Ew-3v19',
    icon: 'fa-solid fa-medal',
    label: 'Making Clean Spaces Our Promise',
    alt: 'Clean Spaces',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkNY4Wiam7b6UVu5DQ6z8eaITOs3rymMXpARw4wHqV6uLUhaPNLIEgtvyCn2YaWeViOHfiVglvv9q4YQC2dokT2iSZ25grwnniK1Wj1LzO4_lsgcXt6Dndvl9qdoPdTuAWqSVOpHwsn77j9wz_9vvNni6C4lFlwLCVLWHKm-aCJCE9s14qbPNH3m_u9v1CndtRATQwM9Q_uwouVdMPTDgKtkaQGt5pJAc8ls3fB6YjltYJk9BOGU481diqkgLbbLJga8mFaiFyad_A',
    icon: 'fa-solid fa-users',
    label: 'Your Trusted Cleaning Experts',
    alt: 'Cleaning Experts',
  },
]

const stats = [
  { num: '10+', label: 'Years of Experience', desc: 'Over the years, we\'ve earned the trust of hundreds homeowners businesses by delivering consistent, high-quality.' },
  { num: '99%', label: 'Customer Satisfaction', desc: 'Our experienced team takes pride in every job, using safe and eco-friendly products to create healthier, brighter.' },
  { num: '10K+', label: 'Happy Clients', desc: 'From on-time service to exceptional attention to detail, our commitment to excellence is reflected in satisfaction.' },
]

export default function Stats() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-2 text-navy font-semibold mb-4">
              <i className="fa-solid fa-leaf" /> About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy leading-tight">
              At M14 Service we believe a clean space creates a happier and healthier life.
            </h2>
          </div>
          <div className="flex justify-start lg:justify-end">
            <a href="#contact" className="btn-primary px-6 py-3 rounded-full font-semibold inline-block">
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 border border-surface-dim rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-navy mb-2">{stat.num}</h3>
              <p className="font-bold text-navy mb-2">{stat.label}</p>
              <p className="text-sm text-muted">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div key={img.label} className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={img.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm mb-4">
                  <i className={`${img.icon} text-xl`} />
                </div>
                <h4 className="font-bold text-lg">{img.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
