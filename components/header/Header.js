import Image from 'next/image';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header>
      <div className={styles.bgStripe} />
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
