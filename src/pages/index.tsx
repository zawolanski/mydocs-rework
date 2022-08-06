import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { Header } from '@/components/Header';

import styles from 'styles/common.module.css';

const Home: NextPage = () => {
  const [t] = useTranslation('main');

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
      </Head>
      <Header />
      <div className={styles.main}>
        <div className="m-auto w-96 border border-black p-8 text-xl flex flex-col mt-10">
          <h1 className="text-3xl mb-3">{t('header')}</h1>
          <Link href="/signin">
            <a className="underline hover:text-red-600 mb-2">{t('signIn')}</a>
          </Link>
          <Link href="/signup">
            <a className="underline hover:text-red-600">{t('signUp')}</a>
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
