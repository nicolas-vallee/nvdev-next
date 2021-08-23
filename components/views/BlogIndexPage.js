import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import Link from 'next/link';
import Date from '../pageSection/Date';

const BlogIndexPage = ({ allPostsData }) => {
  return (
    <main>
      <PageSection>
        <div style={{ width: '100%' }}>
          <TextContent col4lg centered>
            <ul>
              {allPostsData.map(({ id, date, title, excerpt }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <p>{excerpt}</p>
                  <br />
                  <Date dateString={date} />
                </li>
              ))}
            </ul>
          </TextContent>
        </div>
      </PageSection>
    </main>
  );
};

export default BlogIndexPage;
