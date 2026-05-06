export default function CTA() {
  return (
    <section className="bg-accent py-16 relative overflow-hidden">
      {/* Bubble decorations */}
      <div className="absolute top-0 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Join Thousands of Happy<br />Clients and Book Today
        </h2>
        <a
          href="#contact"
          className="bg-white text-accent px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex-shrink-0"
        >
          Join Our Happy Clients
        </a>
      </div>
    </section>
  )
}
