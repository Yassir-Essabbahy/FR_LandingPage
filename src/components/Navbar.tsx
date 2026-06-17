import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/mock-data'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream shadow-[0_1px_0_0_rgba(23,23,23,0.08)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="section-padding flex items-center justify-between h-20 lg:h-24" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="font-display text-lg sm:text-xl lg:text-2xl font-semibold tracking-[0.15em] text-primary" aria-label="Roche Bobois Home">
          ROCHE BOBOIS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-secondary transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#demo"
          className="hidden min-h-11 items-center border border-primary bg-primary px-6 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream lg:inline-flex"
        >
          Request Demo
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative flex h-10 w-10 items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream lg:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-px bg-primary transition-transform duration-300 origin-center ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-primary transition-transform duration-300 origin-center ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-cream border-t border-border overflow-hidden"
          >
            <div className="section-padding py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-base text-secondary transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center border border-primary bg-primary px-6 py-3 text-sm font-medium text-cream transition-colors duration-300 hover:bg-[#2B2B2B]"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
