import Image from 'next/image';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <Image
        src='/images/Running A Relay Race With Colleagues.jpeg'
        alt='A relay race is the perfect combination of teamwork and physical exercise.'
        width={244}
        height={244}
      />
      <Image
        src='/images/Putting On The Green.jpeg'
        width={244}
        height={244}
        alt='Playing golf outdoors.'
      />
      <Image
        src='/images/Enjoying The Sun In Batumi.jpeg'
        alt='Travelling the world opens up the mind and fosters creativity.'
        width={244}
        height={244}
      />
      <Image
        src='/images/Surfing In Portugal.jpeg'
        width={244}
        height={244}
        alt='Surf is the ultimate dance with the power of Nature.'
      />
      <Image
        src='/images/Playing Tennis.jpeg'
        width={244}
        height={244}
        alt='I have practiced many sports in my life and tennis was the first one from my childhood.'
      />
      <Image
        src='/images/Walking On Frozen Paravani Lake.jpeg'
        alt='Georgia is a hidden gem in the Caucasus.'
        width={244}
        height={244}
      />
    </div>
  );
};

export default Gallery;
