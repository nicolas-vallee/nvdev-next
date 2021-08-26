import Image from 'next/image';
import styles from './Illustration.module.scss';

const Illustration = (props) => {
  return (
    <div className={styles.illustration}>
      <Image
        src={props.src}
        width={320}
        height={props.height}
        alt={props.alt}
      />
    </div>
  );
};

export default Illustration;
