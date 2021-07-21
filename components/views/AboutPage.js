import Link from 'next/link';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import VisualContent from '../pageSection/VisualContent';
import MockupMacbook from '../pageSection/MockupMacbook';
import MockupIphone from '../pageSection/MockupIphone';
import Illustration from '../pageSection/Illustration';
import Photo from '../pageSection/Photo';
import Banner from '../pageSection/Banner';

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
      <Banner />
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
      <PageSection>
        <TextContent col4lg>
          <h2>How did I get into dev?</h2>
          <p>
            2019 is the year I let curiosity lead the way. I try my hand at
            several online businesses. Leave Paris and move to Georgia. Turn my
            savings into successful investments. Learn new skills from marketing
            to coding websites.
          </p>
          <p>
            And it all becomes clear to me:{' '}
            <strong>web development is my second career</strong>.
          </p>
          <p>
            So, I find awesome online resources and learn from different
            instructors. Starting with HTML and CSS. A lot of JavaScript, front
            and back with Node. Then I choose to specialize in React. Before
            adding design to my stack.
          </p>
          <p>
            This brings us to now, with me looking to{' '}
            <strong>
              take my front-end development skills to a new team where I am
              valuable and keep growing
            </strong>
            .
          </p>
        </TextContent>
        <VisualContent col2lg visualFirst>
          <Illustration src='/images/Code Review.svg' height={207} />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col4lg>
          <h2>It’s a match!</h2>
          <p>We’re a good fit if:</p>
          <p>
            <ul>
              <li>
                You believe in <strong>continuous improvement</strong> and
                support <strong>growth</strong> and <strong>learning</strong>.
              </li>
              <li>
                You value both <strong>autonomy</strong> and{' '}
                <strong>cooperation</strong>.
              </li>
              <li>Your schedule is compatible with European work hours.</li>
              <li>
                You don’t want drama or headaches. You want to{' '}
                <strong>hire a reliable professional</strong> that’s easy to
                work with.
              </li>
            </ul>
          </p>
        </TextContent>
        <VisualContent col2lg visualFirst visualLeft>
          <Illustration src='/images/Business Deal.svg' height={243} />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col4lg>
          <h2>A self-learner is a problem solver</h2>
          <p>Learning on your own is hard. </p>
          <p>
            And there’s a catch: first, you must know how to learn efficiently.
            I even took{' '}
            <a href='https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/'>
              a course on this subject
            </a>
            .
          </p>
          <p>
            There are a lot of obstacles on the way. A lot of problems to solve.
            Which means a good deal of{' '}
            <strong>reading the documentation</strong> and{' '}
            <strong>searching for solutions</strong> to similar issues.
          </p>
          <p>And you know how much time developers spend doing just that!</p>
        </TextContent>
        <VisualContent col2lg visualFirst>
          <Illustration src='/images/Detailed Analysis.svg' height={228} />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col4lg>
          <h2>Discipline pays dividends</h2>
          <p>
            You’ve heard it before. Make money while you sleep. Your money
            should work for you. Passive income is the dream.
          </p>
          <p>
            And more and more people are set on chasing that dream. But how do
            you get there?
          </p>
          <p>
            It doesn’t happen overnight. Everyone makes mistakes along the way.
            I made many! There’s a lot to learn, and even more to unlearn. It
            requires humility, resilience, and discipline.
          </p>
          <p>
            But it works: in 2020 my portfolio gains exceeded my expenses. I
            achieved my first goal on the way to financial independence.
          </p>
          <p style={{ backgroundColor: 'yellow' }}>
            "Humility to learn, resilience in the face of adversity, discipline
            to keep moving forward."
          </p>
          <p>
            These same qualities carry into achieving any goal, however long the
            road is.
          </p>
        </TextContent>
        <VisualContent col2lg visualFirst visualLeft>
          <Illustration src='/images/Stock Prices.svg' height={280} />
        </VisualContent>
      </PageSection>
    </main>
  );
};

export default AboutPage;
