import { AppPropsType } from 'next/dist/shared/lib/utils'
import { LanguageProvider } from '../contexts/LanguageContext'
import '../styles/globals.scss'

function App({ Component, pageProps, router }: AppPropsType) {
  return (
    <LanguageProvider>
    <Component {...pageProps} key={router.route} />
  </LanguageProvider>
  )
  
  // <Component {...pageProps} />

  
}

export default App
