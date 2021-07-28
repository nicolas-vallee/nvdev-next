import Head from 'next/head';
import Header from '../components/header/Header';
import ProjectsPage from '../components/views/ProjectsPage';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>My Projects</Header>
      <ProjectsPage />
    </>
  );
}
