import Head from 'next/head';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>The front-end developer you like to work with</Header>
    </div>
  );
}
