'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useLanguage } from './LanguageProvider'
import { translations } from '@/lib/i18n'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: t.product, href: '#product' },
    { label: t.biomarkers, href: '#biomarkers' },
    { label: t.technology, href: '#technology' },
    { label: t.about, href: '#about' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group py-2">
            <Logo variant="full" scrolled={scrolled} className="transition-opacity group-hover:opacity-80" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-teal transition-colors relative group ${
                  scrolled ? 'text-navy/70' : 'text-white/80'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-teal text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
            >
              {t.getInTouch}
            </a>

            {/* Language Toggle */}
            <div className="flex items-center ml-2 border-l border-current/20 pl-4">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                  lang === 'en'
                    ? scrolled
                      ? 'bg-teal text-white'
                      : 'bg-white/20 text-white'
                    : scrolled
                    ? 'text-navy/50 hover:text-navy'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                  lang === 'es'
                    ? scrolled
                      ? 'bg-teal text-white'
                      : 'bg-white/20 text-white'
                    : scrolled
                    ? 'text-navy/50 hover:text-navy'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-navy' : 'bg-white'
              } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-navy font-medium hover:bg-teal-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 bg-teal text-white text-center font-medium rounded-lg"
            >
              {t.getInTouch}
            </a>

            {/* Mobile Language Toggle */}
            <div className="flex gap-2 mt-2 px-4 py-2">
              <button
                onClick={() => { setLang('en'); setMobileOpen(false) }}
                className={`flex-1 py-2 text-sm font-mono rounded-lg transition-colors ${
                  lang === 'en'
                    ? 'bg-teal text-white'
                    : 'bg-gray-100 text-navy/60'
                }`}
              >
                English
              </button>
              <button
                onClick={() => { setLang('es'); setMobileOpen(false) }}
                className={`flex-1 py-2 text-sm font-mono rounded-lg transition-colors ${
                  lang === 'es'
                    ? 'bg-teal text-white'
                    : 'bg-gray-100 text-navy/60'
                }`}
              >
                Español
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
