import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AboutPage from '../components/views/AboutPage';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Nicolas Vallée</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>About me</Header>
      <AboutPage />
      <Footer />
    </>
  );
}
