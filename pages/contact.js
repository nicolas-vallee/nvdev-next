import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import ContactPage from '../components/views/ContactPage';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Nicolas Vallée</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>Contact</Header>
      <ContactPage />
      <Footer />
    </>
  );
}
