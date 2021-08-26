import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProjectsPage from '../components/views/ProjectsPage';

export default function Projects() {
  return (
    <>
      <Head>
        <title>My Projects | Nicolas Vallée</title>
        <meta
          name='description'
          content='Hire a self-taught Web Developer specialized in React and skilled in HTML, CSS, JavaScript, Redux, Next, Gatsby, Node.js, MongoDB.'
        />
      </Head>
      <Header>My Projects</Header>
      <ProjectsPage />
      <Footer />
    </>
  );
}
