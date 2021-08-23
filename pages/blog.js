import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import BlogIndexPage from '../components/views/BlogIndexPage';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog | Nicolas Vallée</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>Blog Posts & Case Studies</Header>
      <BlogIndexPage allPostsData={allPostsData} />
      <Footer />
    </>
  );
}
