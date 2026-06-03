export const businessConfig = {
  // Core identity
  name: "PureSpace",
  namePart1: "Pure",
  namePart2: "Space",
  tagline: "Cleaning You Don't Have to Think About",
  category: "cleaning",
  city: "Hyderabad",
  primaryColor: "#1C3F3A",
  secondaryColor: "#6BBF9E",

  // Color palette — injected as CSS variables at boot
  colors: {
    primary:     '#1C3F3A',
    primaryDark: '#142e2a',
    secondary:   '#6BBF9E',
    dark:        '#0A0C29',
    lightGray:   '#E9EAE8',
    cream:       '#EBEBE6',
    white:       '#ffffff',
    muted:       '#6b7280',
    border:      '#e5e7eb',
  },

  // Font config — injected as CSS variables at boot
  fonts: {
    primary:       'Inter',
    display:       'Playfair Display',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800&family=Playfair+Display:ital,wght@1,700;1,800;1,900&display=swap',
  },

  // Hero section
  eyebrow: "HYDERABAD'S TRUSTED CLEANING SERVICE",
  headline: "A Cleaner Space.\nA Clearer Mind.",
  headlineLight: "A Cleaner Space.",
  headlineBold: "A Clearer Mind.",
  heroKeyword: "CLEAN",
  heroImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1400&q=80",
  aboutImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  heroSubtext: "Professional home and office cleaning — thorough, reliable, and completely worry-free.",

  // CTA Banner copy (so it's swappable per client)
  ctaBannerHeadline: "Ready for a space you don't have to think about?",
  ctaBannerSubtext: "Join 2400+ happy homes across Hyderabad. Same-day booking usually available.",

  // About page hero subtitle
  aboutHeroSubtitle: "We're a Hyderabad cleaning team obsessed with the details — the corners other services miss are the corners we care about most.",

  // CTAs
  ctaPrimary: { label: "Book a Clean", link: "/contact" },
  ctaSecondary: { label: "Our Services", link: "/services" },

  // Contact
  phone: "+91 70957 58402",
  whatsapp: "917095758402",
  email: "hello@purespace.in",
  address: "Plot 42, Road No. 12, Banjara Hills, Hyderabad",
  location: "Hyderabad, Telangana",
  mapsEmbed: "https://www.google.com/maps?q=Banjara+Hills,+Hyderabad&output=embed",
  calendlyUrl: "",

  // Hours
  hours: {
    "Monday - Friday": "8:00 AM - 9:00 PM",
    "Saturday": "9:00 AM - 6:00 PM",
    "Sunday": "Closed"
  },

  // About
  about: "PureSpace is a Hyderabad-based cleaning company built on one simple belief: a clean space creates a clearer mind. We bring the same trained team, professional-grade equipment, and obsessive attention to detail to every home and office we touch.",
  story: "PureSpace started in 2019 with a single van, two cleaners, and a promise — that hiring a cleaning service should feel effortless, not stressful. Years later, that promise hasn't changed. We've cleaned thousands of homes across Hyderabad, but we still treat every space like it's our first job: with care, consistency, and respect for your time.",
  founded: "2019",

  // Stats (for counter animations) — string nums for display
  stats: [
    { num: '5',    suffix: '+', label: 'Years of Experience' },
    { num: '2400', suffix: '+', label: 'Homes Cleaned' },
    { num: '4.9',  suffix: '',  label: 'Average Rating' },
    { num: '1200', suffix: '+', label: 'Five-Star Reviews' },
  ],
  // Stat values as numbers — used for CountUp animation targets
  statValues: [
    { num: 5,    suffix: '+', label: 'Years of Experience' },
    { num: 2400, suffix: '+', label: 'Homes Cleaned' },
    { num: 4.9,  suffix: '',  label: 'Average Rating' },
    { num: 1200, suffix: '+', label: 'Five-Star Reviews' },
  ],

  // Trust bar marquee
  trustBar: [
    "★ 4.9 STAR RATING",
    "5+ YEARS STRONG",
    "2400+ HOMES CLEANED",
    "CERTIFIED TEAM",
    "SAME-DAY BOOKING",
    "ECO-FRIENDLY PRODUCTS"
  ],

  // Team — add real linkedin/instagram URLs when available
  team: [
    { name: 'Arjun Reddy',  role: 'Founder & Operations', bio: '8 years in professional cleaning.',         image: '', social: { linkedin: '', instagram: '' } },
    { name: 'Priya Sharma', role: 'Quality Manager',       bio: 'Makes sure every job meets our standard.',  image: '', social: { linkedin: '', instagram: '' } },
    { name: 'Vikram Nair',  role: 'Lead Specialist',       bio: 'Deep-clean expert and team trainer.',       image: '', social: { linkedin: '', instagram: '' } },
    { name: 'Sneha Rao',    role: 'Client Relations',      bio: 'Your first point of contact, every time.',  image: '', social: { linkedin: '', instagram: '' } },
  ],

  // Services
  services: [
    {
      id: 'home',
      number: '01',
      name: "Regular Home Cleaning",
      icon: "FaBroom",
      oneliner: "Consistent, reliable — same team every visit.",
      subtitle: "Consistent, reliable — same team every visit.",
      description: "Weekly or fortnightly cleaning that keeps your home effortlessly fresh. The same trusted team learns your space and your preferences, so it only gets better over time.",
      features: ["All rooms cleaned", "Kitchen + bathrooms", "Vacuum + mop", "Eco-friendly products"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      price: "₹999",
      badge: "Most Popular",
    },
    {
      id: 'deep',
      number: '02',
      name: "Deep Cleaning",
      icon: "FaSprayCan",
      oneliner: "For when you need a truly thorough clean.",
      subtitle: "For when you need a truly thorough clean.",
      description: "Every corner, every surface, every time. We get inside appliances, scrub grout and tile, clean cabinet interiors, and fully sanitise — the reset your home deserves.",
      features: ["Inside appliances", "Grout + tile scrub", "Cabinet interiors", "Full sanitisation"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      price: "₹2,499",
      badge: null,
    },
    {
      id: 'office',
      number: '03',
      name: "Office Cleaning",
      icon: "FaBuilding",
      oneliner: "A productive team deserves a clean space.",
      subtitle: "A productive team deserves a clean space.",
      description: "Daily or weekly commercial cleaning that keeps your workplace sharp and your team healthy. Flexible scheduling that works around your business, not the other way round.",
      features: ["Desks + common areas", "Restrooms", "Waste management", "Flexible scheduling"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      price: "₹1,499",
      badge: null,
    },
    {
      id: 'moveout',
      number: '04',
      name: "Move-in / Move-out",
      icon: "FaBoxOpen",
      oneliner: "Landlord-ready finish, every time.",
      subtitle: "Landlord-ready finish, every time.",
      description: "Leave spotless or arrive to perfect. A complete property clean — inside all storage, windows and blinds included — that meets the highest end-of-tenancy standards.",
      features: ["Full property clean", "Inside all storage", "Windows + blinds", "Landlord-ready"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      price: "₹3,499",
      badge: "Deposit-Back Guarantee",
    },
  ],

  // How it works (Services page)
  howItWorks: [
    { number: "01", title: "Book Your Cleaning", desc: "Schedule online, on WhatsApp, or by phone. Choose your time, date, and type of cleaning.", img: "/howitworks1.jpg" },
    { number: "02", title: "We Arrive & Inspect", desc: "Our team arrives on time, inspects your space, and prepares all supplies.", img: "/howitworks3.jpg" },
    { number: "03", title: "Deep Cleaning Begins", desc: "Every corner cleaned with care — dusting, vacuuming, mopping, sanitising.", img: "/howitworks4.jpg" },
    { number: "04", title: "Final Walkthrough", desc: "We walk through with you to make sure everything meets your expectations.", img: "/howitworks2.jpg" }
  ],

  // Gallery
  gallery: [
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800", category: "Residential", alt: "Modern kitchen deep clean" },
    { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800", category: "Commercial", alt: "Clean modern workspace" },
    { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800", category: "Residential", alt: "Luxury apartment preparation" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", category: "Interior", alt: "Bathroom sanitisation" },
    { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800", category: "Industrial", alt: "Warehouse floor scrub" },
    { src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=800", category: "Interior", alt: "Kitchen counter cleaning" },
    { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800", category: "Residential", alt: "Spotless bedroom" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800", category: "Residential", alt: "Clean home interior" },
    { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800", category: "Commercial", alt: "Clean commercial kitchen" },
  ],

  videoUrl: "",

  // Marquee strip images (MultiImageMarquee component)
  marqueeImages: [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
  ],

  // Before/After pairs (Gallery page)
  beforeAfter: [
    {
      id: 1,
      category: 'Residential',
      title: 'Living Room Deep Clean',
      description: 'Hyderabad apartment, 3BHK',
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    },
    {
      id: 2,
      category: 'Kitchen',
      title: 'Kitchen Restoration',
      description: 'Commercial kitchen, Banjara Hills',
      before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80',
    },
    {
      id: 3,
      category: 'Commercial',
      title: 'Office Floor Scrub',
      description: 'IT office, Gachibowli',
      before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    },
    {
      id: 4,
      category: 'Deep Clean',
      title: 'Full Home Detailing',
      description: 'Villa apartment, Kondapur',
      before: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
    },
    {
      id: 5,
      category: 'Residential',
      title: 'Bathroom Refresh',
      description: 'Villa, Jubilee Hills',
      before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80',
    },
    {
      id: 6,
      category: 'Move-Out',
      title: 'Full Property Clean',
      description: 'Rental handover, Kondapur',
      before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    },
  ],

  // Projects showcase (Home)
  projects: [
    { category: "Residential", title: "Modern Kitchen Deep Clean", location: "Banjara Hills", img: "/project1.jpg" },
    { category: "Commercial", title: "Office Maintenance", location: "Gachibowli", img: "/project2.jpg" },
    { category: "Residential", title: "Luxury Apartment Prep", location: "Jubilee Hills", img: "/project3.jpg" },
    { category: "Interior", title: "Full Home Detailing", location: "Kondapur", img: "/howitworks4.jpg" }
  ],

  // Testimonials
  testimonials: [
    { name: "Priya Sharma",  rating: 5,   location: "Jubilee Hills",  designation: "Homeowner, Jubilee Hills",   text: "They don't just clean — they're thorough in a way I've never seen before. Worth every rupee." },
    { name: "Rahul Mehta",   rating: 5,   location: "Gachibowli",     designation: "Homeowner, Gachibowli",     text: "Booked the deep clean before moving in. The place was spotless. Genuinely impressive." },
    { name: "Sneha Reddy",   rating: 5,   location: "Kondapur",       designation: "Regular Client, Kondapur",  text: "Same team every week, always on time, always perfect. Exactly what I needed." },
    { name: "Imran Khan",    rating: 5,   location: "Banjara Hills",  designation: "Business Owner, Banjara Hills", text: "Our office has never felt more welcoming. Reliable, detail-oriented and professional." },
    { name: "Ananya Iyer",   rating: 4.5, location: "Madhapur",       designation: "Tenant, Madhapur",          text: "Moving out was stressful, but their crew made it effortless. Got my full deposit back." },
    { name: "Karthik Rao",   rating: 5,   location: "Hitech City",    designation: "Office Manager, Hitech City", text: "Eco-friendly products, friendly team, flawless results. I recommend them to everyone." },
  ],

  testimonialVideos: ["", ""],

  // Who We Are checklist
  whoWeAreChecklist: [
    'Every visit follows a defined process',
    'Same trusted team every single time',
    'Eco-friendly products, safe for families'
  ],

  // FAQ
  faq: [
    { q: "How do I book a cleaning?", a: "You can book online through our contact form, on WhatsApp, or by calling us directly. Same-day booking is usually available." },
    { q: "Do you bring your own supplies?", a: "Yes — we arrive fully equipped with professional-grade equipment and eco-friendly cleaning products. You don't need to provide anything." },
    { q: "What if I'm not satisfied?", a: "We offer a satisfaction guarantee. If you're not happy with any area, we'll come back and re-clean it for free." },
    { q: "How long does a clean take?", a: "A standard home clean takes 2–4 hours depending on size. Deep cleans and move-out cleans take longer — we'll give you an estimate when you book." },
    { q: "Are your cleaners background-checked?", a: "Absolutely. Every team member is vetted, professionally trained, and fully insured before they ever enter your space." }
  ],

  // Values (About page)
  values: [
    { icon: 'MdOutlineVerified', title: 'Built on Trust',       description: 'Vetted cleaners you feel comfortable leaving in your home.' },
    { icon: 'MdOutlineEco',      title: 'Eco-Friendly',         description: 'Safe for your family, pets and the planet.' },
    { icon: 'MdOutlineGroups',   title: 'Consistent Team',      description: 'Same trusted faces, every single visit.' },
    { icon: 'MdOutlineStar',     title: 'Obsessed with Detail', description: 'We care about the corners others miss.' },
  ],

  // Social
  social: {
    instagram: "https://instagram.com/purespace",
    facebook: "https://facebook.com/purespace",
    youtube: ""
  },

  // Legal page URLs — set '#' until pages are live
  legalUrls: {
    terms:   '#',
    privacy: '#',
  },

  // AI chat widget
  chatbot: {
    enabled: true,
    primaryColor: '#1C3F3A',
    greeting: "Hi! 👋 I'm PureSpace's assistant. I can help you with pricing, bookings, or any questions about our cleaning services. What can I help you with?",
    suggestedReplies: [
      "What services do you offer?",
      "How much does a clean cost?",
      "Book a cleaning"
    ]
  }
}
