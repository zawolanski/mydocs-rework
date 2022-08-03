import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Header from '@/components/Header';

const Home: NextPage = () => {
  const [t] = useTranslation('main');

  return (
    <>
      <Header />
      <div className="m-auto w-96 border border-black mt-44 p-8 text-xl flex flex-col">
        <h1 className="text-3xl mb-3">{t('header')}</h1>
        <Link href="/signin">
          <a className="underline hover:text-red-600 mb-2">{t('signIn')}</a>
        </Link>
        <Link href="/signup">
          <a className="underline hover:text-red-600">{t('signUp')}</a>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['main'])),
  },
});

export default Home;
