import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import Link from 'next/link';

const BlogIndexPage = ({ allPostsData }) => {
  return (
    <main>
      <PageSection>
        <div style={{ width: '100%' }}>
          <TextContent col4lg centered>
            <p
              style={{
                color: '#5f6a74',
                fontStyle: 'italic',
                marginBottom: '3rem',
              }}
            >
              I deployed this website with the blog section in MVP mode, so for
              the moment it's a bit lacking in content and styling. Thank you
              for your understanding{' '}
              <span style={{ fontStyle: 'normal' }}>😉</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {allPostsData.map(({ id, date, title, excerpt }) => (
                <li key={id} style={{ marginBottom: '3rem' }}>
                  <Link href={`/blog/${id}`}>
                    <a style={{ textDecoration: 'none' }}>
                      <h3>{title}</h3>
                    </a>
                  </Link>
                  <p>
                    {excerpt}{' '}
                    <Link href={`/blog/${id}`}>
                      <a>Read more</a>
                    </Link>
                  </p>
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
