import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
