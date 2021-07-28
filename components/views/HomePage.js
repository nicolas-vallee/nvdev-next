import Link from 'next/link';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import VisualContent from '../pageSection/VisualContent';
import MockupMacbook from '../pageSection/MockupMacbook';
import MockupIphone from '../pageSection/MockupIphone';
import Illustration from '../pageSection/Illustration';
import Photo from '../pageSection/Photo';

const HomePage = () => {
  return (
    <main>
      <PageSection>
        <TextContent col4lg centered>
          <p>
            The feeling of building something. I’ve always been drawn to it.
            Since I was a child, playing with bricks of Legos or virtual cities.
            And now, I’m excited every time I see the lines of code that I write
            come alive on the screen.
          </p>
          <p>
            Expanding your front-end team? Looking for a pragmatic problem
            solver passionate about personal growth?
          </p>
          <p>
            Hi! My name's Nicolas. I’m a self-taught developer specialized in
            React. And I’m a lot more than that!
          </p>
          <p>
            What about my technical skills? Let's dive below into{' '}
            <strong>what I can do for you</strong>. More interested in who I am
            and my story? Head over to the{' '}
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
      <PageSection>
        <TextContent col3lg>
          <h2>A broad range of technical skills</h2>
          <p>
            Before specializing in <strong>React</strong> and front-end in
            general, I explored the <strong>back-end</strong> side of the web
            with <strong>Node</strong> and the <strong>Express</strong>{' '}
            framework.
          </p>
          <p>
            I even explored the world of <strong>Microservices</strong>,
            building a massive course project with <strong>Docker</strong> and{' '}
            <strong>Kubernetes</strong>.
          </p>
          <p>
            Most back-end projects I’ve done integrate with a{' '}
            <strong>MongoDB</strong> non-relational database. If yours connect
            with <strong>Firebase</strong>, I’ve also done that.
          </p>
          <p>
            Testing is an important aspect of shipping production-ready code. I
            have experience writing tests with <strong>Jest</strong>.
          </p>
          <p>
            I understand <strong>TypeScript</strong> and have used it during
            several course projects.
          </p>
          <p>
            I’ve also spent some time building <strong>Shopify</strong>{' '}
            development stores and learning about their <strong>Liquid</strong>{' '}
            templating language.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualLeft
          caption={`Natours is a booking website for a travel agency built in November 2019 as part of a coding bootcamp. Node.js app built with Express and MongoDB. Automated emails with SendGrid and payment processing with Stripe API.`}
        >
          <MockupMacbook src='/videos/Live Demo Natours 380x238.mp4' />
        </VisualContent>
      </PageSection>
      <PageSection lightBg>
        <TextContent col4lg>
          <h2>SEO as a standard</h2>
          <p>
            Mobile-first design. Faster page loads. Optimized metadata. These
            are some of the many things you control to ensure your websites are
            crawled properly, well understood by robots, and ranked as high as
            they deserve.
          </p>
          <p>
            Certified by Semrush in{' '}
            <span style={{ backgroundColor: 'yellow' }}>
              Technical SEO and Mobile SEO
            </span>
            , I strive to implement scalable and future-proof{' '}
            <strong>SEO best practices</strong>.
          </p>
        </TextContent>
        <VisualContent col2lg>
          <Illustration src='/images/Upvote.svg' height={210} />
        </VisualContent>
      </PageSection>
      <PageSection lightBg>
        <TextContent col4lg>
          <h2>A dev who can sell?</h2>
          <p>
            Imagine. An engineer who understands the science behind the art of
            persuasion. And isn’t afraid to use it. Don’t you want{' '}
            <em>that guy</em> on your team?
          </p>
          <p>
            <strong>Marketing</strong> and <strong>psychology</strong> have been
            two pillars of my self-learning. Now I’m also{' '}
            <span style={{ backgroundColor: 'yellow' }}>
              flexing my <strong>copywriting</strong> muscles
            </span>
            .
          </p>
          <p>
            Because selling with words is the most valuable skill to have for
            any online business to succeed.
          </p>
        </TextContent>
        <VisualContent col2lg visualLeft>
          <Illustration src='/images/Online Ad.svg' height={153} />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col3lg>
          <h2>Comfortable navigating uncharted waters</h2>
          <p>
            Is it scary to start something new? I’ve done it 9 times already as
            an employee, not even counting my own enterprises.
          </p>
          <p>
            New job, new company, new country, new industry, new project, new
            skill. You can believe it when I say I thrive on new challenges!{' '}
          </p>
          <p>
            I learn fast and adapt well to any environment so you can be assured
            that{' '}
            <strong>
              when I join your team, I get up to speed in a breeze
            </strong>
            .
          </p>
        </TextContent>
        <VisualContent
          col3lg
          caption={`Rafting the tumultuous Zambezi River in 2014.`}
        >
          <Photo src='/images/Rafting Zambezi River.jpeg' />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col4lg centered>
          <p>
            This story continues on the{' '}
            <Link href='/about'>
              <a>About Me</a>
            </Link>{' '}
            page.
          </p>
          <p>
            Also, check out{' '}
            <Link href='/projects'>
              <a>some of my projects</a>
            </Link>
            , read{' '}
            <Link href='/blog'>
              <a>my blog posts</a>
            </Link>
            , or{' '}
            <Link href='/contact'>
              <a>contact me</a>
            </Link>
            .
          </p>
        </TextContent>
      </PageSection>
    </main>
  );
};

export default HomePage;
