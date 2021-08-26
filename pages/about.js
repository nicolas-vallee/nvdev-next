import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AboutPage from '../components/views/AboutPage';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Nicolas Vallée</title>
        <meta
          name='description'
          content='Resourceful Engineer with experience of demanding environments, I bring clear and effective communication at the service of the team.'
        />
      </Head>
      <Header>About me</Header>
      <AboutPage />
      <Footer />
    </>
  );
}
