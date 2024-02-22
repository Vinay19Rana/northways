import { useState } from 'react'
import HeroSlider from './components/Home/HeroSlider';
import AboutSection from './components/Home/AboutSection';
import Services from './components/Services/Services';
import OurWork from './components/OurWork/OurWork';
import Testimonials from './components/Testimonials/Testimonials';
import Parteners from './components/Parteners/Parteners';
import { motion } from 'framer-motion'
function App() {

  return (
    <motion.div initial="hidden" animate="show">
      <HeroSlider />
      <AboutSection />
      <Services />
      <OurWork />
      <Testimonials />
      <Parteners />
    </motion.div>
  )
}

export default App
