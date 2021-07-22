import ContactForm from '../pageSection/ContactForm';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';

const ContactPage = () => {
  return (
    <main>
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
      <PageSection>
        <div style={{ width: '100%' }}>
          <TextContent col4lg centered>
            <h2>Send me a message</h2>
          </TextContent>
          <div className={`col4lg centered`}>
            <ContactForm />
          </div>
        </div>
      </PageSection>
    </main>
  );
};

export default ContactPage;
