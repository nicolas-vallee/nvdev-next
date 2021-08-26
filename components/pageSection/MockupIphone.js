import Image from 'next/image';
import styles from './MockupIphone.module.scss';

const MockupIphone = (props) => {
  return (
    <div className={styles.mockup}>
      <Image
        src='/images/IPhone Mockup Device 240x480.png'
        layout='fill'
        objectFit='contain'
        alt=''
      />
      <video src={props.src} width='210px' controls autoPlay muted loop>
        This video is not supported by your browser.
      </video>
    </div>
  );
};

export default MockupIphone;
