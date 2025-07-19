'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '' },
  { name: 'About Me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Experiences', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact Me', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [menuOpen])

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md shadow-sm transition-all">
      {/* Logo */}
      <Link href="/" className="text-2xl font-extrabold">
        <span className="text-chart-3">P</span>
        <span className="text-primary">ersonal</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-zinc-600 hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-primary/10"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          Download CV
        </Button>
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md hover:bg-zinc-100"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6 text-zinc-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] h-screen w-screen flex md:hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          {/* Sidebar */}
          <div className="relative z-10 ml-auto w-full h-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 shadow-xl p-5 overflow-y-auto flex flex-col">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            {/* Navigation */}
            <nav className="mt-8 flex flex-col gap-4 text-base font-medium text-left">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-zinc-800 hover:text-primary transition-colors px-2 py-2 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
