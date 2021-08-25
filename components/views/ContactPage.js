import ContactForm from '../pageSection/ContactForm';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';

const ContactPage = () => {
  return (
    <main>
      <PageSection>
        <div style={{ width: '100%' }}>
          <TextContent col4lg centered>
            <h2>Send me a message</h2>
            <p style={{ color: '#5f6a74', fontStyle: 'italic' }}>
              In an effort to deploy this site ASAP, I left a few features to be
              implemented post-launch, like this contact form.
            </p>
            <p style={{ color: '#5f6a74', fontStyle: 'italic' }}>
              In the meantime, you can send me an email at:{' '}
              <a href='mailto:hello@nicolasvallee.dev'>
                hello@nicolasvallee.dev
              </a>
              .
            </p>
            <p style={{ color: '#5f6a74', fontStyle: 'italic' }}>
              Sorry for the inconvenience.
            </p>
          </TextContent>
          {/* <div className={`col4lg centered`}>
            <ContactForm />
          </div> */}
        </div>
      </PageSection>
      <PageSection>
        <TextContent col4lg centered>
          <p>
            Connect with me on{' '}
            <a href='https://www.linkedin.com/in/nvallee/'>LinkedIn</a>
          </p>
          <p>
            Inspect my source code on{' '}
            <a href='https://github.com/nicolas-vallee'>GitHub</a>
          </p>
          <p style={{ fontStyle: 'italic', color: '#5F6A74' }}>
            (Repos for older projects are on{' '}
            <a href='https://github.com/nva12'>this account</a>)
          </p>
        </TextContent>
      </PageSection>
    </main>
  );
};

export default ContactPage;
