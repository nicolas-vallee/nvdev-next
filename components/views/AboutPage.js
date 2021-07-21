import Link from 'next/link';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import VisualContent from '../pageSection/VisualContent';
import MockupMacbook from '../pageSection/MockupMacbook';
import MockupIphone from '../pageSection/MockupIphone';
import Illustration from '../pageSection/Illustration';
import Photo from '../pageSection/Photo';

const AboutPage = () => {
  return (
    <main>
      <PageSection>
        <TextContent col4lg centered>
          <p>
            We’ve covered{' '}
            <Link href='/'>
              <a>what I can do for you</a>
            </Link>
            . Now let’s see how my background benefits your team.
          </p>
        </TextContent>
      </PageSection>
      <PageSection>
        <TextContent col4lg>
          <h2>Experienced Engineer</h2>
          <p>
            When you’re procuring valves for a nuclear power plant, technical
            specifications and safety standards are paramount.
          </p>
          <p>
            And when your client is chartering pipe-laying vessels to develop a
            subsea oil production field, each day counts. It counts in millions
            of dollars.
          </p>
          <p>
            I’ve worked as a Project Engineer in demanding environments for over
            6 years and understand the value of{' '}
            <strong>doing things right the first time</strong>.
          </p>
        </TextContent>
        <VisualContent col2lg visualFirst>
          <Illustration src='/images/Project Completed.svg' height={238} />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col4lg>
          <h2>Dependable team player</h2>
          <p>
            <ul>
              <li>
                <strong>Independent and resourceful?</strong> Check.
              </li>
              <li>
                <strong>Excellent collaboration skills?</strong> Check.
              </li>
            </ul>
            Apply both and you get some productive work done.
          </p>
          <p>
            My previous roles involved a lot of <strong>autonomy</strong> on my
            part. I enjoy <strong>responsibility</strong> and eagerly take{' '}
            <strong>ownership</strong> of my work.
          </p>
          <p>
            These jobs usually put me at{' '}
            <strong>the interface of different disciplines</strong>, dealing
            with both clients and suppliers.
          </p>
          <p>
            I bring <strong>clear and effective communication</strong> to these
            interactions.
          </p>
        </TextContent>
        <VisualContent col2lg visualFirst visualLeft>
          <Illustration src='/images/Scrum Board.svg' height={238} />
        </VisualContent>
      </PageSection>
    </main>
  );
};

export default AboutPage;
