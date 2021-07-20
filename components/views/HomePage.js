import Link from 'next/link';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import VisualContent from '../pageSection/VisualContent';
import MockupMacbook from '../pageSection/MockupMacbook';
import MockupIphone from '../pageSection/MockupIphone';

const HomePage = () => {
  return (
    <main>
      <PageSection>
        <TextContent col4lg centered>
          <p>
            Expanding your front-end team? Looking for a pragmatic problem
            solver passionate about personal growth?
          </p>
          <p>
            I’m a self-taught developer specialized in React. And I’m a lot more
            than that!
          </p>
          <p>
            This short video{' '}
            <span style={{ backgroundColor: 'yellow' }}>(xx min)</span> goes
            over <strong>what I can do for you:</strong>
          </p>
          <span style={{ backgroundColor: 'yellow' }}>
            Insert the video here...
          </span>
          <p>
            Want to know more about my technical skills? Keep reading below.
            More interested in who I am and my story? Head over to the{' '}
            <Link href='/about'>
              <a>About Me</a>
            </Link>{' '}
            page. Jump straight to{' '}
            <Link href='/projects'>
              <a>some projects I’ve done</a>
            </Link>
            , read about{' '}
            <Link href='/blog'>
              <a>some challenges I solved</a>
            </Link>
            , or{' '}
            <Link href='/contact'>
              <a>send me a message</a>
            </Link>
            .
          </p>
        </TextContent>
      </PageSection>
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
      <PageSection>
        <TextContent col3lg>
          <h2>Appreciation for design</h2>
          <p>
            70% of people don’t trust ugly websites,{' '}
            <a href='https://www.realwire.com/releases/70-Per-Cent-Of-People-Dont-Trust-Badly-Designed-Websites'>
              a survey says
            </a>
            . Good design is a must-have, too bad companies are facing{' '}
            <a href='https://www.fastcompany.com/90252229/how-to-capitalize-on-the-design-industrys-talent-shortage'>
              a talent shortage.
            </a>
          </p>
          <p>
            Fundamental UX and UI design skills augment your dev team. And they
            don’t get outdated easily!
          </p>
          <p>
            That’s why I recently took several courses covering{' '}
            <strong>UX research</strong>, <strong>UI design</strong> with its
            process and theories, all the way to complete{' '}
            <strong>design systems</strong>.
          </p>
          <p>
            What’s more, I loved it so much I now use <strong>Figma</strong> to
            wireframe and prototype whole applications.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          caption={`Sweet Tooth, a prototype I made with Figma in May 2021.`}
        >
          <MockupIphone src='/videos/Live Demo Sweet Tooth 210x452.mp4' />
        </VisualContent>
      </PageSection>
    </main>
  );
};

export default HomePage;
