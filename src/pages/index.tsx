import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
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
        <div className="m-auto mt-10 flex w-96 flex-col border border-black p-8 text-xl">
          <h1 className="mb-3 text-3xl">{t('header')}</h1>
          <Link href="/signin">
            <a className="mb-2 underline hover:text-red-600">{t('signIn')}</a>
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
