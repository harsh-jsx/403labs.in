'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const headerRef = useRef(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 glass-effect">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">403Labs</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#services" className="text-white hover:text-cyan-400 transition-colors duration-300">Services</Link>
            <Link href="#about" className="text-white hover:text-cyan-400 transition-colors duration-300">About</Link>
            <Link href="#contact" className="text-white hover:text-cyan-400 transition-colors duration-300">Contact</Link>
          </div>
          <div className="flex items-center">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-300" />}
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              className="ml-4 md:hidden p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="#services" className="block text-white hover:text-cyan-400 transition-colors duration-300">Services</Link>
              <Link href="#about" className="block text-white hover:text-cyan-400 transition-colors duration-300">About</Link>
              <Link href="#contact" className="block text-white hover:text-cyan-400 transition-colors duration-300">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

