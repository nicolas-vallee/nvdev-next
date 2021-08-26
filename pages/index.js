import Head from 'next/head';
import Header from '../components/header/Header';
import HomePage from '../components/views/HomePage';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          The Front-End Developer You Like To Work With | Nicolas Vallée
        </title>
        <meta
          name='description'
          content='Grow your Front-End engineering: hire a problem solver skilled in semantic HTML, responsive CSS, JavaScript, React, Node.js, Design, SEO, Marketing.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>The front-end developer you like to work with</Header>
      <HomePage />
      <Footer />
    </>
  );
}
