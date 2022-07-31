import type { NextPage } from 'next';
import Link from 'next/link';

const Signin: NextPage = () => (
  <div>
    <Link href="/">
      <a>My docs</a>
    </Link>
    <p>Sign in</p>
  </div>
);

export default Signin;
