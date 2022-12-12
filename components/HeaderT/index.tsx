import { useRouter } from 'next/router';

import Navigation from '../Navigation';
import useTranslation from '../../hooks/useTranslation';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Header({ className, children }: Props) {
  const headerClass = className || 'header';
  const { setLocale, locales } = useTranslation();
  const { asPath, pathname, push, route } = useRouter();

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    //@ts-ignore
    setLocale(language);

    if (!route.includes('post/')) {
      push(pathname, asPath.replace(regex, `/${language}`));
    }
  }

  return (
    <header style={{width:'50px'}}>
      {/* <Navigation /> */}
      {children}
      <div className="lang">
        {locales.map((locale) => (
          <button key={locale} onClick={() => handleLocaleChange(locale)}>  
            {locale}
          </button>
        ))}
      </div>
    </header>
  );
}