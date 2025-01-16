'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const section = sectionRef.current
    gsap.from(section?.querySelectorAll('.contact-item'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
    })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitMessage('Thank you for your message. We\'ll get back to you soon!')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div className="contact-item" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
              />
            </motion.div>
            <motion.div className="contact-item" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
              />
            </motion.div>
            <motion.div className="contact-item" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
              />
            </motion.div>
            <motion.div className="contact-item" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-purple-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </form>
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center text-green-400"
            >
              {submitMessage}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

