import Logo from './Logo'
import { useLanguage } from './LanguageProvider'
import { translations } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <footer className="bg-navy-950 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="full" scrolled={false} className="opacity-90" />
            </div>
            <p className="text-navy-200 text-sm leading-relaxed">
              {t.footerDesc}
            </p>
            <p className="mt-4 text-navy-400 text-xs leading-relaxed italic">
              {t.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
              {t.productsLabel}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#product" className="text-navy-200 hover:text-teal transition-colors">
                  {t.salivFooter}
                </a>
              </li>
              <li>
                <a href="#about" className="text-navy-200 hover:text-teal transition-colors">
                  {t.plantaclinicFooter}
                </a>
              </li>
              <li>
                <span className="text-navy-400">{t.textileFooter}</span>
                <span className="text-navy-500 text-xs ml-2">{t.comingSoon}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
              {t.contactLabel}
            </h4>
            <ul className="space-y-3 text-sm text-navy-200">
              <li>
                <a href="mailto:sales@vitae-technologies.com" className="hover:text-teal transition-colors">
                  sales@vitae-technologies.com
                </a>
              </li>
              <li>Dubai, United Arab Emirates</li>
              <li>Vitae Technologies DMCC</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-xs">
            {t.copyright}
          </p>
          <p className="text-navy-500 text-xs">
            DMCC Free Zone LLC · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
