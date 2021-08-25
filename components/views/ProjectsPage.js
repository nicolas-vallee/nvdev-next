import Link from 'next/link';
import PageSection from '../pageSection/PageSection';
import TextContent from '../pageSection/TextContent';
import VisualContent from '../pageSection/VisualContent';
import MockupMacbook from '../pageSection/MockupMacbook';

const ProjectsPage = () => {
  return (
    <main>
      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>CRWN Clothing</h3>
            <a
              href='https://crwn-clothing-nva.vercel.app/'
              style={{ flexShrink: 0 }}
            >
              Visit the site
            </a>
          </div>
          <p>
            In April 2021, I tweaked this <strong>React</strong> bootcamp
            project to make it more interesting.
          </p>
          <p>
            Instead of the following along with the course, I used{' '}
            <strong>Next.js</strong>, <strong>Redux Toolkit</strong>, React{' '}
            <strong>Hooks</strong>, and <strong>Styled Components</strong>.
          </p>
          <p>
            This project is deployed on <strong>Vercel</strong>.
          </p>
          <Link href='blog/refactoring-course-project'>
            <button>Read the case study</button>
          </Link>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`E-shop built with Next.js.`}
        >
          <MockupMacbook
            src='/images/Screenshot CRWN Clothing.jpg'
            screenshot
          />
        </VisualContent>
      </PageSection>

      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>ProShop</h3>
            <a
              href='https://proshop-nva.herokuapp.com/'
              style={{ flexShrink: 0 }}
            >
              Visit the site
            </a>
          </div>
          <p>
            The state is managed with <strong>Redux</strong>. User
            authentication is handled with{` `}
            <strong>JWT</strong>.
          </p>
          <p>
            The UI is built with <strong>React Bootstrap</strong>. The app
            integrates with{` `}
            <strong>PayPal</strong> to process customer payments.
          </p>
          <p>
            Developed in December 2020 as a coding project from a{' '}
            <strong>MERN e-commerce</strong> online course. Deployed on{' '}
            <strong>Heroku</strong>.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`E-commerce app built from scratch with the MERN stack.`}
        >
          <MockupMacbook src='/images/Screenshot ProShop.jpg' screenshot />
        </VisualContent>
      </PageSection>

      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>Gatsby Blog</h3>
            <a
              href='https://gatsby-demo-blog-nva.netlify.app/'
              style={{ flexShrink: 0 }}
            >
              Visit the site
            </a>
          </div>
          <p>
            Demonstration blog developed during April 2020 with the static site
            generator <strong>Gatsby</strong>, with several modules and widgets
            showcased.
          </p>
          <p>
            Posts are automatically generated from <strong>Markdown</strong>{' '}
            files, and this process could as well be integrated with a CMS such
            as Contentful.
          </p>
          <p>
            React components are styled using the CSS-in-JS library{' '}
            <strong>Emotion</strong>.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`Design inspired by the popular Extra theme.`}
        >
          <MockupMacbook src='/images/Screenshot Gatsby Blog.jpg' screenshot />
        </VisualContent>
      </PageSection>

      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>The React Palette</h3>
            <a
              href='https://react-palette-nva.netlify.com/'
              style={{ flexShrink: 0 }}
            >
              Visit the site
            </a>
          </div>
          <p>
            Users can compose their own palettes, with a{' '}
            <strong>drag-and-drop</strong> functionality, and copy a color in
            either Hex, RGB, or RGBA format directly to their clipboard by
            clicking on a color box.
          </p>
          <p>
            Developed using React <strong>class components</strong>,{' '}
            <strong>styles-in-JS</strong>, and the <strong>Material-UI</strong>{' '}
            framework.
          </p>
          <p>
            Coding exercise from a complete <strong>React</strong> bootcamp
            taken in February 2020.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`A clone of websites like Flat UI Colors and Material UI Colors. `}
        >
          <MockupMacbook
            src='/images/Screenshot React Palette.jpg'
            screenshot
          />
        </VisualContent>
      </PageSection>

      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>Clear View Escapes</h3>
            <a href='https://clear-view.netlify.com/' style={{ flexShrink: 0 }}>
              Visit the site
            </a>
          </div>
          <p>
            Static website built with <strong>Webpack</strong> using{' '}
            <strong>HTML</strong>, <strong>PostCSS</strong> with{' '}
            <strong>BEM methodology</strong>, modern <strong>JavaScript</strong>
            . Mobile-first design optimized for performance.
          </p>
          <p>
            Developed in December 2019 as a coding exercise during an online
            course. Entirely remade in September 2020 as a front-end development
            practice project.
          </p>
          <p>
            Deployed on <strong>Netlify</strong>.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`Landing page and modal contact form for a custom travel agency.`}
        >
          <MockupMacbook
            src='/images/Screenshot Clear View Escapes.jpg'
            screenshot
          />
        </VisualContent>
      </PageSection>

      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>Natours</h3>
            <a
              href='https://natours-nva.herokuapp.com/'
              style={{ flexShrink: 0 }}
            >
              Visit the site
            </a>
          </div>
          <p>
            <strong>Node.js</strong> back-end application developed with the{' '}
            <strong>Express</strong> frameword and a <strong>MongoDB</strong>{' '}
            database. HTML rendering with <strong>Pug templates</strong>.
            Deployed on <strong>Heroku</strong>.
          </p>
          <p>
            Notable features include automated email sending with{' '}
            <strong>SendGrid</strong>, and payment processing with{' '}
            <strong>Stripe API</strong>.
          </p>
          <p>
            Adapted from a coding exercise of a Node.js bootcamp taken in
            November 2019.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`Booking website for a travel agency.`}
        >
          <MockupMacbook src='/images/Screenshot Natours.jpg' screenshot />
        </VisualContent>
      </PageSection>
      <PageSection>
        <TextContent col3lg>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <h3>Mountain Travel</h3>
            <a
              href='https://mountain-travel-nva.netlify.com/'
              style={{ flexShrink: 0 }}
            >
              Visit the site
            </a>
          </div>
          <p>
            Static site realized with <strong>HTML</strong> and{' '}
            <strong>CSS</strong>. Layout with modern{' '}
            <strong>CSS Flexbox</strong>.
          </p>
          <p>
            Refactored from a coding exercise of a Web Developer bootcamp
            followed in October and November 2019.
          </p>
          <p>
            I added fade-in and slide-in animations with <strong>jQuery</strong>
            , a contact form on a new page, class names following{' '}
            <strong>BEM methodology</strong>, a build workflow with{' '}
            <strong>Webpack</strong> and <strong>PostCSS</strong>, and deployed
            on <strong>Netlify</strong>.
          </p>
        </TextContent>
        <VisualContent
          col3lg
          visualFirst
          visualLeft
          caption={`Landing page for an adventure tour startup.`}
        >
          <MockupMacbook
            src='/images/Screenshot Mountain Travel.jpg'
            screenshot
          />
        </VisualContent>
      </PageSection>
    </main>
  );
};

export default ProjectsPage;
