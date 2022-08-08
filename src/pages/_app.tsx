import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const locale = localStorage.getItem('locale');
    if (locale && locale !== router.locale) router.push(router.pathname, router.asPath, { locale });
  }, [router]);

  return (
    <ThemeProvider attribute="class">
      <div className="font-sans antialiased">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
