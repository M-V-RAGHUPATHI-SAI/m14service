import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-accent py-16 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Join Thousands of Happy<br />Clients and Book Today
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-white text-accent px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
        >
          Join Our Happy Clients
        </motion.a>
      </div>
    </section>
  )
}
