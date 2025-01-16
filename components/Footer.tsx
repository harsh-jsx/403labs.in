import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient">403Labs</h3>
            <p className="text-sm mt-2 text-gray-400">Creating stunning websites that drive results</p>
          </div>
          <div className="flex space-x-4">
            <motion.a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Twitter</motion.a>
            <motion.a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>LinkedIn</motion.a>
            <motion.a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>GitHub</motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 403Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

