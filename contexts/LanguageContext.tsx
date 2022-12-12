import { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'hu';
export const locales = ['hu', 'en'];
export const LanguageContext = createContext([]);
//@ts-ignore
export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('hu');

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem('lang') || locale;
    setLocale(language);
  }, [locale]);

  return (
    //@ts-ignore
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
}
