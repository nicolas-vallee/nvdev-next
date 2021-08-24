import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
// import Date from '../../components/pageSection/Date';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PageSection from '../../components/pageSection/PageSection';
import TextContent from '../../components/pageSection/TextContent';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title} | Nicolas Vallée</title>
      </Head>
      <Header>{postData.title}</Header>
      <main>
        <PageSection>
          <div style={{ width: '100%' }}>
            <TextContent col4lg centered>
              {/* <Date dateString={postData.date} /> */}
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </TextContent>
          </div>
        </PageSection>
      </main>
      <Footer />
    </>
  );
};

export default Post;
