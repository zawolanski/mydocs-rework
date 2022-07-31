import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <div>
    <h1>My docs</h1>
    <Link href="/signin">
      <a>Sign in</a>
    </Link>
    <br />
    <Link href="/signup">
      <a>Sign up</a>
    </Link>
  </div>
);

export default Home;
