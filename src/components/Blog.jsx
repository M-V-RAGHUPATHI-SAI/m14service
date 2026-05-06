const posts = [
  {
    date: 'Oct 13, 2025',
    author: 'David Edson',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1GaUUK6JL2fWD_tjn2jx0Br-_yhMfTQgJmtyBefl_n92bMSXZ700213DVX7syzRV1Uk77WcqZOwEucfzRVYNu3gzfwlSAnAWQDT8eCW4-1x-H8vsX-TNJDANnk4KTwT7CSK8bVYvWR8Lopq68y17ziWV1rdDCX94y3kAfwMNFavh2MR71cmYUK5nYdh4lFHkFvmJ6eYg423uQ-AQzjv4WmHvaSZNc_rWncf3FnofIt736TQQS1oxHHPqQNJ2awtlbRdtQWepLaBeI',
    title: 'Daily Cleaning Habits Simple Routines for a Spotless Home',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgQL6Ww-7gOezWYHvHLVqXiXldhwQHcOXO89-0SgmRox_c_Ao8puZa1rAKHJvaZ4gzleIxp7m9gUNuKe0LoymfiJZq4ZQB--L-BM3X3hL0tWutV5k4pYYRAnhNMZSMHtCJwXBDMu-xNkzvWLGhkZ7rbKa0YS3QvnMvjC0IUzzPY1gsTHZWSaMfmBhmF3x2ZT_zI5rAkYJgzeTKmyn3pqMSmUpkV1EygdUIA4aScyRXyAIQUBHF0A2XxXW2LUe3wqKDEiUvobNpd1_L',
  },
  {
    date: 'Oct 4, 2025',
    author: 'James Hall',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQEKZFCbldm6ZaLKcf4Zai5ry_jM0AzzpjTFkMSb5-3IOlHiHtrZpKbDmfrjSW1WJNEE8yMJWpe7wExJf5EvsgA73n_XIfNf5XbphZKMuqjo-KD7DQ74q7zmEWT-pEtY0w0tuiwathLCbQ67H57s05TUEXON6wLMDSn_01eIOulOYHnKXGbp7oOXRyao3LjSQRu3ScP8AksqvtSbKwQscXNVj1qNxQVinspbogtdw769b0EtFZT5WrvBQ3EFwlY4f779Tk8P5g8ih',
    title: 'Green & Safe Cleaning Tips Eco-Friendly Care for Family',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcWyRMXJBpv9ca4lumSUY_aQwA2AWt8I1fPM-T__saiKgPMPmNIvyrgYTRjuv02Vi48Ph_zxyu31LIt5ImJASJ7pXuATR_UiYA6f2ck7AFZv8sgKfTG-Y2eSze6-TYNIXmKI0n3eBrw6jCKo0nqHuJOFM_WljXny5lNg6Gw12wSOI8QFGnhL6X2TX_ZHPTg76Hrm6UyZvNUhGISm8Vis4qXV7-AQ5wU17irxvBOujP5WtSWAKxcFU5ohmXYjJsXYu0Dzwbud0LxkgL',
  },
  {
    date: 'Oct 18, 2025',
    author: 'Mary Freund',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW9I7lP9qOce6xFdn39qr69rukDdOiZe3HtC02ZaOJ4mKcuLbi6l737SWWKGAWTo4NLbO7qQHY7MB79VUCc2oeMtHOp-jWr0wglz4z2jwzTRdG_3-Dkjs5bmKWeRrZi3wn4Ga0dT9qoZqbRK6lHnZMZLsh34nE31RI_b3Kv3azq1LHQ2pYSOIHGsnd7_izeP2HrOivEVe7af_xrK7sRW2yhYslnt1O9DSzeZ2J46_E90wOd05bBtWaLNPNYY7tzeapphxT9_DEkxHh',
    title: 'Tips, Guides & Expert Advice for a Spotless Property',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9UUTPKSzpPxxvQIWq6D6f_6izAe7QHINz9FJPrs2B8oeSh6VKc9i4_U5d0pI2r1vdU3_BBaB3xNqtjhGwpvhyLMcNomvMS_kiw1cJqPrULFng0Q8ICFH_HcLSXAu3nM1YrwzyH0T9oCG7gW-iBxIkgTShUhVpOZIAZhiMHNSnI4TRQaBhtFTLQ1kWu7bv1aX0kG6ic3SSuceRR6JKjy_57O-cTxa7C7rVmxqkM-7XcNa-3uM1W9XrvqPZc-7zoNjK5vjcNTUMEosM',
  },
  {
    date: 'Oct 14, 2025',
    author: 'David Edson',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMl_gi7OrXepUw_EFlXl3UpwQrZATNIruJYqhTMZcQRqHI6rgVtI3Vk6Hphuz1h6cnXLj2aIi-HOs42xERmA77huNQdmwYBTMqPy5WWkbz3V1HGXw85KbXrvQ3-gE81FVw9VbPJa7fEdAh_3ixPP3bU1v4J2U97IhZFaMpIE_DFgSEoDLkD64m-NjO-1FsO_iP_S1ivUEzzNrCvxbF_GgwPnLdlhtZuihRutlB4vVXVnGNplZjHNNY2aCRm22iHxWayLwG76A3OQlu',
    title: 'Stain And Odor Solutions Professional Tricks That Work',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC31TzzzU1GnjmKzLpZzNEfxNURO-0j0j48166jmC14r397fbxMcsAa1eEYXifsVk-RtJl5h3jGqAfPQOCTqtrnWSopPJjBrEH4WNe4eKCRhwBU2Rb0yzQhJfrwKFtZ41n4x3UWnk_hEHMoq6xyWSV5o_-LjRomnqYyLuVa9ZLTtH10TxHWWi68xy9vuEX5tRm9M679-NMkTP2_Sy0wBtSSXRmaX7xw9GhXzL5nVetTjs3p5VBZBcBGUdBr8GCaZCoKRSlS-x7Otj4-',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-navy font-semibold mb-4">
            <i className="fa-solid fa-pen-nib" /> Our Blog
          </div>
          <h2 className="text-4xl font-bold text-navy leading-tight">
            Cleaning Tips And Expert Advice<br />Stay Updated Stay Sparkling
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-surface rounded-2xl p-4 flex flex-col sm:flex-row gap-6 items-center border border-surface-dim group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full sm:w-48 h-48 rounded-xl overflow-hidden relative flex-shrink-0">
                <img
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={post.img}
                />
                <div className="absolute bottom-2 left-2 bg-white text-xs font-bold px-2 py-1 rounded text-navy flex items-center gap-1">
                  <i className="fa-regular fa-calendar" /> {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 text-xs text-muted mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      alt={post.author}
                      className="w-5 h-5 rounded-full object-cover"
                      src={post.authorAvatar}
                    />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fa-regular fa-comment" /> 0 Comments
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="font-bold text-sm text-navy hover:text-accent transition-colors flex items-center gap-1"
                >
                  Learn More <i className="fa-solid fa-arrow-right-long" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
