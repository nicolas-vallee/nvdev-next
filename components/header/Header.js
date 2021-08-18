import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.scss';
import { Squash as Hamburger } from 'hamburger-react';

const Header = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className={styles.bgStripe}></div>
      <div className={styles.hamburgerIcon}>
        <Hamburger toggled={isOpen} toggle={setOpen} rounded color='#f9fcff' />
      </div>
      <div className={styles.container}>
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
          <h2>Nicolas Vallée</h2>
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
