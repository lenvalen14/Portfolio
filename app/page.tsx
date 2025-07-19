'use client';

import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Certificates from '@/components/sections/Certificates'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}


