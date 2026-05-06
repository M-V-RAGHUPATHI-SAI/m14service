const services = [
  {
    title: 'Commercial & Office Cleaning',
    desc: 'We clean offices, retail spaces, & business premises with consistency, helping make.',
    chips: ['#OfficeCleaning', '#CleaningExperts', '#CleanLifestyle', '#CleaningTips'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDGhQGpmJ5UJd_ZubMePlOZoJJW34niWUmEEp3noXMk2W-bEIvA10jh43tfWOFFbROxrkzoP1gCnU5KOwrOSRbkOo2agsDz59AsekuvAPjxWy0ZJK9fAMYMIkbaXYHV4pWPjMMncK6deTwnr3pc73D0dxwZyLOCdZ-r70X3VbN-HqRPKve9XB3UiSOZEcYTQbfNsji8acgndXYubzI0j43mVP00KDLJZyNPglf-ZNy0-OhoYlvKCPJVX19TzsIyygSi3iNeqq2cwNV',
    primary: true,
  },
  {
    title: 'Move-in / Move-Out Cleaning',
    desc: 'We leave corner untouched deep cleaning kitchens, bathrooms, floors, and fixtures.',
    chips: ['#OfficeCleaning', '#EcoFriendlyCleaning', '#QualityCleaning', '#CleanLifestyle'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNw21LZ1Hx8v_quYS81FNIEex2bZsmOmyc2GuFpd2Oq1pvfabCWxVpWtxTbfNYDWqhxJrrNmdcV1HMbKJ0PupJoAR-TbBaTQPC6HHzEE0NgT003HG5Jh85FpJ9_yqQ6--GjPhTfe_xfXpGBS8aSXvEizqngltUNlMp5fCN6to5flqkMDvSIWfFG6yu8lfYk-ssiddlXF55ffQcUtaoX2Q-ZJTtnvIjBqimEfBO0GjqXUEWUe0np5fvAtgQfXKCO76CEoVeoRbUv-02',
    primary: false,
  },
  {
    title: 'Window & Glass Cleaning',
    desc: 'Our streak-free window cleaning removes dust, fingerprints, and smudges to give.',
    chips: ['#OfficeCleaning', '#HomeCleaning', '#WeCleanYouRelax', '#DeepCleaning'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWu2Mzbb45IGjNo3cfvcHWb6bZrutWp89GORzMSjSa_xsxloP5Tlp86zGLBuf0_3Qop3DeeXHhMpvtQ1gTQtrwo7snir7SYkm12cXW0kuITqPEvcBrCp_G-1PQjmO1s6O0uEkU14zA35QRwViM_OrMJUcnm177TxmioSDzw-n9lVnG_tEmNK7qTnH8hCdlfIfwXQMZGZxF6sX6Y7GU3VWhN9RvmMxfASqfRsE8jqHHh9ieJ6Cj1T_kYNdUqI6nZTRpc5OGYVN6rL2B',
    primary: false,
  },
  {
    title: 'Post-Construction Cleaning',
    desc: 'After renovations or building projects, we step in to remove dust, debris, and residue.',
    chips: ['#OfficeCleaning', '#CommercialCleaning', '#SpotlessHome', '#CleaningTips'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLZVycAqyQc0cFr2osd4DUfNJiY_d2vI5C6M1Hmc1GiG5wGIXmVadP4cymKuun7ci5IQZX4bGOG4VafRdWENURMHeeTDVuuS9rfEvnc8q6cMS_JO2d5NJiW5f3qOCCFhVIbFPKTKqmiOgV2xJGVhBXijIIlU73ck7M1J7IVhRAgd45fEH5rAwCXggAP_OaZY6ETSo2dh3-U9F3uyVPn6NPnYfTFYMM42IOrOajpYwlNdwhg8a5rABAubEdY2AtB-TQcF6wBsodGyAg',
    primary: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-navy font-semibold mb-4">
            <i className="fa-solid fa-broom" /> Our Cleaning Services
          </div>
          <h2 className="text-4xl font-bold text-navy">Professional Cleaning Solutions</h2>
        </div>

        {/* Service Cards - Stacked List */}
        <div className="space-y-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-2xl card-shadow flex flex-col md:flex-row gap-8 items-center border border-surface-dim hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy mb-4">{s.title}</h3>
                <p className="text-muted mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.chips.map((chip) => (
                    <span key={chip} className="px-3 py-1 bg-surface rounded-full text-xs font-medium text-muted">
                      {chip}
                    </span>
                  ))}
                </div>
                {s.primary ? (
                  <button className="btn-primary px-6 py-2 rounded-full font-medium text-sm">
                    Learn More
                  </button>
                ) : (
                  <button className="btn-outline px-6 py-2 rounded-full font-medium text-sm">
                    Learn More
                  </button>
                )}
              </div>
              <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src={s.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
