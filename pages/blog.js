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
        <meta
          name='description'
          content='How does a resourceful self-learner solve coding challenges? Here is some insight from my journey into web development.'
        />
      </Head>
      <Header>Blog Posts & Case Studies</Header>
      <BlogIndexPage allPostsData={allPostsData} />
      <Footer />
    </>
  );
}
