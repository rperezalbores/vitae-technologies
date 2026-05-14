'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export default function SuppliersPage() {
  const programs = [
    {
      name: 'SALIV',
      tagline: 'Saliva diagnostics',
      categories: [
        'Electrochemical assay reagents and enzyme stabilisation',
        'Test-strip substrate and gold-nanoparticle inks',
        'BLE reader electronics and injection-moulded housings',
        'Foil pouching and secondary packaging',
      ],
    },
    {
      name: 'Verdia',
      tagline: 'Precision horticulture',
      categories: [
        'Liquid fertilizer concentrates — custom NPK and micronutrient blends',
        'Chelation chemistry and organic-certified options',
        'Primary packaging for liquid concentrates',
        'Label printing and international logistics',
      ],
    },
  ]

  const criteria = [
    'ISO 9001 quality systems',
    'REACH / ECHA compliance where applicable',
    'ESMA registration for UAE-bound goods (or willingness to obtain)',
    'Private-label and white-label experience',
    'International logistics capability',
    'Documentation in English (additional languages a plus)',
  ]

  const process = [
    { n: '01', t: 'Introductory call', d: '30-minute call to understand capabilities and fit.' },
    { n: '02', t: 'Mutual NDA', d: 'Standard mutual confidentiality before sharing specifications.' },
    { n: '03', t: 'RFQ', d: 'Volume forecasts, target specifications, and commercial parameters.' },
    { n: '04', t: 'Sample evaluation', d: 'Technical and quality validation against program requirements.' },
    { n: '05', t: 'Commercial terms', d: 'Multi-year supply agreement and onboarding.' },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative bg-navy text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-teal-900 opacity-90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            className="inline-block font-mono text-teal-300 text-xs uppercase tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Suppliers & Partners
          </motion.span>
          <motion.h1
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Build with us.
          </motion.h1>
          <motion.p
            className="text-navy-200 text-lg lg:text-xl leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Vitae Technologies sources materials, components, and contract-manufacturing
            services for our active product programs. We work with suppliers under
            private-label and multi-year supply agreements.
          </motion.p>
        </div>
      </section>

      {/* PROGRAMS WE SOURCE FOR */}
      <motion.section
        className="py-20 lg:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span className="font-mono text-teal text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
            Programs We Source For
          </motion.span>
          <motion.h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy mb-12" variants={fadeUp}>
            Two active programs.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <motion.div
                key={p.name}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
                variants={fadeUp}
              >
                <h3 className="font-display font-bold text-2xl text-navy">{p.name}</h3>
                <p className="text-teal text-sm font-medium mt-1 mb-5">{p.tagline}</p>
                <ul className="space-y-2.5">
                  {p.categories.map((c, i) => (
                    <li key={i} className="flex gap-3 text-navy-600 text-sm leading-relaxed">
                      <span className="text-teal flex-shrink-0">▸</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHAT WE LOOK FOR */}
      <motion.section
        className="py-20 lg:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span className="font-mono text-teal text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
            What We Look For
          </motion.span>
          <motion.h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy mb-10" variants={fadeUp}>
            Qualified, accountable, scalable.
          </motion.h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {criteria.map((c, i) => (
              <motion.li
                key={i}
                className="flex gap-3 text-navy-700 leading-relaxed"
                variants={fadeUp}
              >
                <span className="text-teal flex-shrink-0 mt-1">✓</span>
                <span>{c}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section
        className="py-20 lg:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span className="font-mono text-teal text-xs uppercase tracking-[0.3em]" variants={fadeUp}>
            Process
          </motion.span>
          <motion.h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy mb-12" variants={fadeUp}>
            From first contact to supply agreement.
          </motion.h2>
          <div className="space-y-5">
            {process.map((step) => (
              <motion.div
                key={step.n}
                className="flex gap-5 p-5 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-colors"
                variants={fadeUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                  <span className="font-mono text-teal font-bold">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-navy">{step.t}</h3>
                  <p className="text-navy-500 mt-1">{step.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-teal to-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Let's talk.
          </h2>
          <p className="text-teal-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us about your capabilities, geographic reach, and the programs you'd like to support.
          </p>
          <a
            href="mailto:suppliers@vitae-technologies.com"
            className="inline-block px-10 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            suppliers@vitae-technologies.com
          </a>
          <p className="mt-8 text-teal-200 text-sm">
            Vitae Technologies — incorporating in DMCC Free Zone, Dubai, United Arab Emirates
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
