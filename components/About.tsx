'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    gsap.from(section?.querySelectorAll('.about-item'), {
      x: -100,
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About 403Labs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="about-item glass-effect p-6 rounded-lg" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300">
              At 403Labs, our mission is to empower businesses with cutting-edge web solutions that drive growth and success in the digital landscape.
            </p>
          </motion.div>
          <motion.div className="about-item glass-effect p-6 rounded-lg" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Approach</h3>
            <p className="text-gray-300">
              We combine creativity, technology, and strategy to deliver tailored solutions that meet the unique needs of each client, ensuring their online presence stands out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

