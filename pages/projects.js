import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProjectsPage from '../components/views/ProjectsPage';

export default function Projects() {
  return (
    <>
      <Head>
        <title>My Projects | Nicolas Vallée</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>My Projects</Header>
      <ProjectsPage />
      <Footer />
    </>
  );
}
