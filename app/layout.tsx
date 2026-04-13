import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vitae Technologies — Non-Invasive Wellness Sensing',
  description: 'Multi-biomarker saliva wellness sensing. Explore what\'s inside without a drop of blood. SALIV tracks glucose, lactate, ketones, uric acid, and pH from a single saliva sample. Wellness device — not for medical diagnosis.',
  metadataBase: new URL('https://vitae-technologies.com'),
  openGraph: {
    title: 'Vitae Technologies — Non-Invasive Wellness Sensing',
    description: 'Multi-biomarker saliva wellness sensing. Explore what\'s inside without a drop of blood.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitae Technologies — Non-Invasive Wellness Sensing',
    description: 'Multi-biomarker saliva wellness sensing. Explore what\'s inside without a drop of blood.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
