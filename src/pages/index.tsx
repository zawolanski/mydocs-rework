import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Logo } from '@/components/Logo';
import styles from 'styles/common.module.css';

const Home: NextPage = () => {
  const [t] = useTranslation('main');

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
      </Head>
      <Header />
      <div className={`${styles.main} flex items-center justify-center`}>
        <div className="flex w-96 flex-col items-center gap-5 rounded-lg p-8 text-xl shadow-lg ring-1	ring-slate-900/5 dark:text-slate-300 dark:ring-0">
          <Logo size="large" />
          <Link href="/signin">
            <a className="w-full rounded-lg border border-slate-400/10 p-3 transition-colors hover:bg-slate-400/20">
              <h2 className="mb-3 text-xl font-semibold">{t('signIn')}</h2>
              <p className="text-lg">{t('signInText')}</p>
            </a>
          </Link>
          <Link href="/signup">
            <a className="w-full rounded-lg border border-slate-400/10 p-3 transition-colors hover:bg-slate-400/20">
              <h2 className="mb-3 text-xl font-semibold">{t('signUp')}</h2>
              <p className="text-lg">{t('signUpText')}</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['main', 'common'])),
  },
});

export default Home;
