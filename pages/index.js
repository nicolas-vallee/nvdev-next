import Head from 'next/head';
import Header from '../components/header/Header';
import PageSection from '../components/pageSection/PageSection';
import TextContent from '../components/pageSection/TextContent';
import VisualContent from '../components/pageSection/VisualContent';
import MockupMacbook from '../components/pageSection/MockupMacbook';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>The front-end developer you like to work with</Header>
      <PageSection lightBg>
        <TextContent col3lg>
          <h2>The modern workflow: building on solid foundations</h2>
          <p>
            Here’s a tasty website recipe: bring together chunks of semantic{' '}
            <strong>HTML</strong>, spread some <strong>CSS</strong> on top, and
            sprinkle some <strong>JavaScript</strong> to make it all come alive.
            These are the fundamentals of web development I first learned. No
            surprises there.
          </p>
          <p>
            I use <strong>Git</strong> for version control on all my projects.
            And usually deploy them on <strong>Netlify</strong> or{' '}
            <strong>Heroku</strong> from a <strong>GitHub</strong> repo.
          </p>
          <p>
            Responsive layouts offer a better user experience. That makes{' '}
            <strong>Flexbox</strong> and <strong>CSS Grid</strong> essential to
            master. Both are in my toolbox.
          </p>
          <p>
            Modern CSS benefits from a robust workflow. I’m fond of the{' '}
            <strong>BEM methodology</strong> for naming classes. And I regularly
            use <strong>PostCSS</strong> and <strong>Sass</strong>.
          </p>
          <p>
            Sometimes you need a UI framework to do the heavy lifting. I’ve used{' '}
            <strong>Bootstrap</strong> and <strong>Material UI</strong> on
            several occasions. I’m also considering{' '}
            <strong>Tailwind CSS</strong> for my next project.
          </p>
          <p>
            I’m no stranger to the latest JS syntax, like <strong>ES6</strong>,
            since that is pretty much a requirement for <strong>React</strong>.
          </p>
          <p>
            Although I work mostly with configs like{' '}
            <strong>Create React App</strong> or{' '}
            <strong>Create Next App</strong>, I am also familiar with build
            tools like <strong>Babel</strong>, <strong>Webpack</strong>, and{' '}
            <strong>Parcel</strong>.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          caption={`Landing page and modal contact form. Mobile-first design optimized
        for performance. Built in September 2020 with Webpack using HTML,
        PostCSS, and modern JavaScript.`}
        >
          <MockupMacbook src='/videos/Live Demo Clear View Escapes 380x238.mp4' />
        </VisualContent>
      </PageSection>
      <PageSection lightBg>
        <TextContent col3lg>
          <h2>Specialized in React</h2>
          <p>
            It’s the most popular front-end library. Why not learn about it? So,
            I did. And I immediately loved working with <strong>React</strong>!
          </p>
          <p>
            I’ve built several applications with <strong>Redux</strong> for
            state management.
          </p>
          <p>
            Whether you’re writing styles using <strong>CSS Modules</strong> or
            a <strong>Styled Components</strong> library, I have experience
            using both.
          </p>
          <p>
            I’ve developed a few projects with <strong>Gatsby</strong>. And{' '}
            <strong>Next</strong> is now my go-to framework for{' '}
            <strong>React</strong> projects (I’m using it for this portfolio.)
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualLeft
          caption={`CRWN Clothing is a React bootcamp project that I tweaked in April 2021 to make it more interesting. Click on the image to read the case study. Spoiler: I used Next.js, Redux Toolkit, React Hooks, and Styled Components.`}
        >
          <MockupMacbook src='/videos/Live Demo CRWN Clothing 380x238.mp4' />
        </VisualContent>
      </PageSection>
    </div>
  );
}
