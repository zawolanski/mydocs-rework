import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const Signin: NextPage = () => (
  <div>
    <Link href="/">
      <a>My docs</a>
    </Link>
    <p>Sign up</p>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['signup'])),
  },
});

export default Signin;
