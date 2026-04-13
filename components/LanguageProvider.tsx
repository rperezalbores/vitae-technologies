'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Language } from '@/lib/i18n'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang)
    document.documentElement.lang = newLang
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
