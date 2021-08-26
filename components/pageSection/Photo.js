import Image from 'next/image';
import styles from './Photo.module.scss';

const Photo = (props) => {
  return (
    <div className={styles.photoContainer}>
      <Image
        src={props.src}
        layout='fill'
        objectFit='contain'
        alt={props.alt}
      />
    </div>
  );
};

export default Photo;
