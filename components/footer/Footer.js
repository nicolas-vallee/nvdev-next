import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <p>&copy;2021 Nicolas Vallée</p>
        <div className={styles.socialIcons}>
          <a href='https://www.linkedin.com/in/nvallee/' aria-label='LinkedIn'>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
          <a href='https://github.com/nva12' aria-label='GitHub'>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
