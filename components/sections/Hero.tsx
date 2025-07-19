'use client'

import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
  <div className="min-h-screen max-w-6xl mx-auto grid md:grid-cols-2 py-20 items-center">
    <div className="space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold leading-snug">
        <span className="text-primary">
          <Typewriter
            words={["Hello I'm Giang Son"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <br />
        <span className="text-2xl md:text-3xl font-bold tracking-wide">
          <span className="text-[#bfa074]">Data Scientist</span> <span className="text-zinc-700 dark:text-zinc-200">based in Vietnam.</span>
        </span>
      </h1>
      <div className="flex gap-4">
        <a href="https://github.com/GiangSon-5" target="_blank" className="hover:scale-110 transition-transform hover:text-primary"><Github size={28} /></a>
        <a href="https://linkedin.com/" target="_blank" className="hover:scale-110 transition-transform hover:text-primary"><Linkedin size={28} /></a>
        <a href="mailto:abc@gmail.com" className="hover:scale-110 transition-transform hover:text-primary"><Mail size={28} /></a>
        <a href="https://www.facebook.com/giangson0.0" target="_blank" className="hover:scale-110 transition-transform hover:text-primary"><Facebook size={28} /></a>
        <a href="https://www.instagram.com/_giangson_/" target="_blank" className="hover:scale-110 transition-transform hover:text-primary"><Instagram size={28} /></a>
      </div>
      <div className="flex gap-4 pt-4">
        <Button>Hire Me</Button>
        <Button variant="outline">Download CV</Button>
      </div>
    </div>

    <div className="text-center">
      <Image src="/illustration.png" alt="Hero" width={600} height={600} />
    </div>
  </div>
  )
}
