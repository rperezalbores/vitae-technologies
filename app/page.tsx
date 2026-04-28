'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/i18n'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

function MotionSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -60px 0px' }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const biomarkers = [
    {
      name: t.glucoseName,
      short: 'GLU',
      icon: '🩸',
      color: 'bg-amber-50 border-amber-200',
      iconBg: 'bg-amber-100',
      description: t.glucoseDesc,
    },
    {
      name: t.lactateName,
      short: 'LAC',
      icon: '💪',
      color: 'bg-red-50 border-red-200',
      iconBg: 'bg-red-100',
      description: t.lactateDesc,
    },
    {
      name: t.uricAcidName,
      short: 'UA',
      icon: '⚡',
      color: 'bg-purple-50 border-purple-200',
      iconBg: 'bg-purple-100',
      description: t.uricAcidDesc,
    },
    {
      name: t.ketonesName,
      short: 'BHB',
      icon: '🔥',
      color: 'bg-orange-50 border-orange-200',
      iconBg: 'bg-orange-100',
      description: t.ketonesDesc,
    },
    {
      name: t.phName,
      short: 'pH',
      icon: '💧',
      color: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-100',
      description: t.phDesc,
    },
  ]

  const steps = [
    {
      number: '01',
      title: t.step1Title,
      description: t.step1Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: t.step2Title,
      description: t.step2Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: t.step3Title,
      description: t.step3Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const techFeatures = [
    {
      title: t.tech5Electrode,
      description: t.tech5ElectrodeDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: t.techAuNP,
      description: t.techAuNPDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t.techEnzyme,
      description: t.techEnzymeDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: t.techBLE,
      description: t.techBLEDesc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-teal-900" />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              key={`hero-text-${lang}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.span
                className="inline-block font-mono text-teal-300 text-xs uppercase tracking-[0.3em] mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t.heroTagline}
              </motion.span>

              <motion.h1
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.heroTitle1}
                <br />
                <span className="text-teal-300">{t.heroTitle2}</span>
              </motion.h1>

              <motion.p
                className="text-navy-200 text-lg lg:text-xl leading-relaxed max-w-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {t.heroDesc}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#product"
                  className="px-8 py-4 bg-teal text-white font-medium rounded-xl hover:bg-teal-400 transition-all duration-300 shadow-lg shadow-teal/25 hover:shadow-teal/40"
                >
                  {t.discoverSaliv}
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  {t.partnerWithUs}
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              key={`hero-img-${lang}`}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/images/saliv_ecosystem.png"
                  alt="SALIV Ecosystem"
                  width={700}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              >
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🧬</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.fiveBiomarkers}</p>
                  <p className="text-xs text-navy-400">{t.onePlatform}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-navy-300 text-xs font-mono uppercase tracking-widest">{t.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-navy-300 to-transparent" />
        </motion.div>
      </section>

      {/* ========== COMPLIMENT DISCLAIMER ========== */}
      <section className="bg-teal-50 border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-teal-800 text-sm leading-relaxed">
            💡 {t.complementDisclaimer}
          </p>
        </div>
      </section>

      {/* ========== THE PROBLEM ========== */}
      <MotionSection key={`problem-${lang}`} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span className="font-mono text-teal text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
              {t.problemLabel}
            </motion.span>
            <motion.h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight" variants={fadeUp}>
              {t.problemTitle}
            </motion.h2>
            <motion.p className="mt-6 text-navy-400 text-lg leading-relaxed" variants={fadeUp}>
              {t.problemDesc}
            </motion.p>
          </div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {[
              {
                emoji: '😣',
                title: t.painfulTitle,
                description: t.painfulDesc,
              },
              {
                emoji: '💸',
                title: t.expensiveTitle,
                description: t.expensiveDesc,
              },
              {
                emoji: '📊',
                title: t.singleDataPointsTitle,
                description: t.singleDataPointsDesc,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-display font-semibold text-xl text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* ========== THE SOLUTION / PRODUCT ========== */}
      <MotionSection key={`product-${lang}`} id="product" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              key={`product-img-${lang}`}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/saliv_reader_device.png"
                  alt="SALIV Reader Device"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              key={`product-text-${lang}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-teal text-xs uppercase tracking-[0.3em]">
                {t.introducing}
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-navy leading-tight">
                {t.solutionTitle}
              </h2>
              <p className="mt-6 text-navy-400 text-lg leading-relaxed">
                {t.solutionDesc}
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    label: t.testStrips,
                    desc: t.testStripsDesc,
                    icon: '🧪',
                  },
                  {
                    label: t.bleReader,
                    desc: t.bleReaderDesc,
                    icon: '📱',
                  },
                  {
                    label: t.smartphoneApp,
                    desc: t.smartphoneAppDesc,
                    icon: '📊',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-navy">{item.label}</h3>
                      <p className="text-navy-400 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* ========== 5 BIOMARKERS ========== */}
      <MotionSection key={`biomarkers-${lang}`} id="biomarkers" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span className="font-mono text-teal text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
              {t.biomarkersLabel}
            </motion.span>
            <motion.h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight" variants={fadeUp}>
              {t.biomarkersTitle}
            </motion.h2>
            <motion.p className="mt-6 text-navy-400 text-lg" variants={fadeUp}>
              {t.biomarkersDesc}
            </motion.p>
          </div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6" variants={staggerContainer}>
            {biomarkers.map((bio, i) => (
              <motion.div
                key={i}
                className={`group relative p-6 rounded-2xl border ${bio.color} hover:shadow-lg transition-all duration-300`}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className={`w-14 h-14 ${bio.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {bio.icon}
                  </motion.span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg text-navy">{bio.name}</h3>
                  <span className="font-mono text-xs text-navy-400">{bio.short}</span>
                </div>
                <p className="text-navy-400 text-sm leading-relaxed">{bio.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Strip image */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <Image
                src="/images/pack_variants.png"
                alt={t.salivStripVariants}
                width={700}
                height={200}
                className="w-full max-w-3xl h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* ========== HOW IT WORKS ========== */}
      <MotionSection key={`howitworks-${lang}`} className="py-24 lg:py-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span className="font-mono text-teal-300 text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
              {t.howItWorksLabel}
            </motion.span>
            <motion.h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight" variants={fadeUp}>
              {t.howItWorksTitle}
            </motion.h2>
          </div>

          <motion.div className="grid md:grid-cols-3 gap-8 lg:gap-12" variants={staggerContainer}>
            {steps.map((step, i) => (
              <motion.div key={i} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal/20 border border-teal/30 mb-6">
                  <span className="font-mono text-teal-300 font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3">{step.title}</h3>
                <p className="text-navy-200 leading-relaxed">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-teal/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* App screenshots */}
          <motion.div
            className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { src: '/images/app_home_screen.png', label: t.appHome },
              { src: '/images/app_results_screen.png', label: t.appResults },
              { src: '/images/app_trend_screen.png', label: t.appTrends },
            ].map((app, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-white/10">
                  <Image
                    src={app.src}
                    alt={`SALIV App — ${app.label}`}
                    width={200}
                    height={360}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-3 text-navy-300 text-sm font-mono">{app.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* ========== TECHNOLOGY ========== */}
      <MotionSection key={`tech-${lang}`} id="technology" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              key={`tech-text-${lang}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-teal text-xs uppercase tracking-[0.3em]">
                {t.techLabel}
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-navy leading-tight">
                {t.techTitle}
              </h2>
              <p className="mt-6 text-navy-400 text-lg leading-relaxed">
                {t.techDesc}
              </p>

              <div className="mt-10 space-y-6">
                {techFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl hover:bg-teal-50/50 transition-colors"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-navy">{feature.title}</h3>
                      <p className="text-navy-400 text-sm mt-1">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              key={`tech-img-${lang}`}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-50"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/Signal Amplification Stack.png"
                  alt={t.signalAmp}
                  width={500}
                  height={350}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-50"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/Five Electrodes Close-Up.png"
                  alt={t.fiveElectrodes}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* ========== ABOUT VITAE ========== */}
      <MotionSection key={`about-${lang}`} id="about" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span className="font-mono text-teal text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
              {t.aboutLabel}
            </motion.span>
            <motion.h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight" variants={fadeUp}>
              {t.aboutTitle}
            </motion.h2>
            <motion.p className="mt-6 text-navy-400 text-lg leading-relaxed" variants={fadeUp}>
              {t.aboutDesc}
            </motion.p>
          </div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {[
              {
                name: t.salivName,
                tagline: t.salivTagline,
                description: t.salivDesc,
                status: t.salivStatus,
                statusColor: 'bg-amber-100 text-amber-700',
              },
              {
                name: t.plantaclinicName,
                tagline: t.plantaclinicTagline,
                description: t.plantaclinicDesc,
                status: t.plantaclinicStatus,
                statusColor: 'bg-green-100 text-green-700',
              },
              {
                name: t.textileName,
                tagline: t.textileTagline,
                description: t.textileDesc,
                status: t.textileStatus,
                statusColor: 'bg-navy-100 text-navy-700',
              },
            ].map((product, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300"
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-navy">{product.name}</h3>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-teal text-sm font-medium mb-3">{product.tagline}</p>
                <p className="text-navy-400 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      {/* ========== CTA / CONTACT ========== */}
      <MotionSection key={`cta-${lang}`} className="py-24 lg:py-32 bg-gradient-to-br from-teal to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
            variants={fadeUp}
          >
            {t.ctaTitle}
          </motion.h2>
          <motion.p
            className="text-teal-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={fadeUp}
          >
            {t.ctaDesc}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
          >
            <a
              href="mailto:sales@vitae-technologies.com"
              className="px-10 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              sales@vitae-technologies.com
            </a>
            <a
              href="https://vitae-technologies.com"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              vitae-technologies.com
            </a>
          </motion.div>

          <motion.p
            className="mt-8 text-teal-200 text-sm"
            variants={fadeUp}
          >
            Vitae Technologies — Dubai, United Arab Emirates
          </motion.p>
        </div>
      </MotionSection>

      <Footer />
    </div>
  )
}
