import Head from 'next/head';
import Header from '../components/header/Header';
import AboutPage from '../components/views/AboutPage';

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>About me</Header>
      <AboutPage />
    </>
  );
}
