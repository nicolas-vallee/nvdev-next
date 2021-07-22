import Head from 'next/head';
import Header from '../components/header/Header';
import ContactPage from '../components/views/ContactPage';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>Contact</Header>
      <ContactPage />
    </>
  );
}
