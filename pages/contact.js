import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import ContactPage from '../components/views/ContactPage';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Nicolas Vallée</title>
        <meta
          name='description'
          content='I am looking to join a team where my Front-End development skills keep growing. Let’s discuss how we can work together.'
        />
      </Head>
      <Header>Contact</Header>
      <ContactPage />
      <Footer />
    </>
  );
}
