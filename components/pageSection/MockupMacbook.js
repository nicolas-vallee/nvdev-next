import Image from 'next/image';
import styles from './MockupMacbook.module.scss';

const MockupMacbook = (props) => {
  return (
    <div className={styles.mockup}>
      <Image
        src='/images/Macbook Pro Mockup Device Loading State 496x285.png'
        layout='fill'
        objectFit='contain'
      />
      <video src={props.src} width='380px' controls autoplay muted loop>
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default MockupMacbook;
