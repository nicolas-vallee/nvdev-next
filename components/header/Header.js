import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import classNames from 'classnames';

const Header = (props) => {
  const [isOpen, setOpen] = useState(false);
  const menuOverlayClass = classNames(styles.menuOverlay, {
    [styles.menuOpen]: isOpen,
  });
  const hamburgerIconClass = classNames(styles.hamburgerIcon, {
    [styles.iconFixed]: isOpen,
  });

  return (
    <header className={styles.header}>
      <div className={styles.bgStripe}></div>
      <div className={menuOverlayClass}>
        <div className={styles.menuBg}>
          <div className={styles.menuItems}>
            <nav>
              <li>
                <Link href='/'>
                  <a>What I Can Do For You</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>About Me</a>
                </Link>
              </li>
              <li>
                <Link href='/projects'>
                  <a>My Projects</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Blog Posts & Case Studies</a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={hamburgerIconClass}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            rounded
            color='#f9fcff'
            label='Toggle main navigation menu'
          />
        </div>
        <div className={styles.avatarContainer}>
          <Image
            src='/images/Nicolas Vallee Web Developer.png'
            alt='Picture of Nicolas Vallee'
            layout='fill'
            objectFit='contain'
            objectPosition='center center'
            priority
          />
        </div>
        <div className={styles.brandContainer}>
          <h2>Nicolas Vall??e</h2>
          <span className={styles.subtitle}>Web Developer</span>
        </div>
        <div className={styles.titleContainer}>
          <h1>{props.children}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
