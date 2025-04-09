"use client"

import { useState, useEffect } from "react"
import { DnaIcon, Twitter, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dire-RU7KCaEc3IqMIxUgWWJ0ZVVGkLUMZa.png"
              alt="Wolf Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl tracking-wider font-rajdhani">GHOST</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-200 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-cyan-400 transition-colors font-rajdhani">
              About
            </Link>
            <Link
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full transition-colors font-rajdhani"
            >
              Buy on Pump.fun <ExternalLink className="h-3 w-3" />
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm hover:text-cyan-400 transition-colors py-2 font-rajdhani"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full transition-colors font-rajdhani"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy on Pump.fun <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section with Full-Screen Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-04-09%2013.31.33%20-%20A%20realistic%203D%20render%20of%20a%20full-body%20dire%20wolf%20standing%20in%20an%20Ice%20Age%20wilderness.%20The%20dire%20wolf%20has%20thick%20white%20fur%2C%20a%20powerful%20muscular%20build%2C%20and%20li-RNVJRG6ANce0cBZrUD3vn3omB8F52E.webp"
            alt="Wolf in snowy landscape"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-white font-rajdhani"
            >
              GHOST
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 font-light font-syncopate"
            >
              The Wolf is Back. Resurrected for the Chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-full transition-all hover:scale-105 font-medium font-rajdhani"
              >
                Buy on Pump.fun <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/THEDIRETOKEN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent border border-gray-400 hover:border-cyan-400 hover:text-cyan-400 px-8 py-3 rounded-full transition-all hover:scale-105 font-medium font-rajdhani"
              >
                Follow on Twitter <Twitter className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-180"
            />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-rajdhani">
              The <span className="text-cyan-400">Genesis</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-outfit">
              GHOST is a memecoin born from science fiction turned reality — inspired by the resurrection of the extinct
              dire wolf through cutting-edge genetics. It embodies power, rarity, and unstoppable momentum.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-800 transition-colors border border-gray-800"
            >
              <div className="bg-cyan-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <DnaIcon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-rajdhani">Genetic Revival</h3>
              <p className="text-gray-400 font-outfit">
                Inspired by cutting-edge de-extinction technology and ancient power
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-800 transition-colors border border-gray-800"
            >
              <div className="bg-cyan-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-6 w-6 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-rajdhani">Primal Power</h3>
              <p className="text-gray-400 font-outfit">Unstoppable force with the spirit of the ancient dire wolf</p>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-800 transition-colors border border-gray-800"
            >
              <div className="bg-cyan-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-6 w-6 text-cyan-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.64 20.59 3.09 16.01 3.09 11.12V6.73C3.09 5.91 3.71 4.98 4.48 4.67L10.05 2.39C11.3 1.88 12.71 1.88 13.96 2.39L19.53 4.67C20.29 4.98 20.92 5.91 20.92 6.73V11.12H20.91Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-rajdhani">Blockchain Security</h3>
              <p className="text-gray-400 font-outfit">
                Built with advanced technology for a secure, decentralized future
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rajdhani">
              Join the <span className="text-cyan-400">Pack</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto font-outfit">
              Be part of the resurrection. GHOST is more than a memecoin — it's the rebirth of ancient power in the
              digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-full transition-all hover:scale-105 font-medium font-rajdhani"
              >
                Buy on Pump.fun <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/THEDIRETOKEN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-3 rounded-full transition-all hover:scale-105 font-medium font-rajdhani"
              >
                Follow on Twitter <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dire-RU7KCaEc3IqMIxUgWWJ0ZVVGkLUMZa.png"
              alt="Wolf Logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <span className="font-bold text-lg tracking-wider font-rajdhani">GHOST</span>
          </div>
          <p className="text-sm text-gray-500 mb-4 font-outfit">
            GHOST is a memecoin with no intrinsic value or financial return expectation. This website does not
            constitute financial advice.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://x.com/THEDIRETOKEN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Pump.fun</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
