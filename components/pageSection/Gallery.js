import Image from 'next/image';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <Image
        src='/images/Running A Relay Race With Colleagues.jpeg'
        width={244}
        height={244}
      />
      <Image src='/images/Putting On The Green.jpeg' width={244} height={244} />
      <Image
        src='/images/Enjoying The Sun In Batumi.jpeg'
        width={244}
        height={244}
      />
      <Image src='/images/Surfing In Portugal.jpeg' width={244} height={244} />
      <Image src='/images/Playing Tennis.jpeg' width={244} height={244} />
      <Image
        src='/images/Walking On Frozen Paravani Lake.jpeg'
        width={244}
        height={244}
      />
    </div>
  );
};

export default Gallery;
