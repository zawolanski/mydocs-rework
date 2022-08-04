import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <div className="font-sans antialiased">
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
