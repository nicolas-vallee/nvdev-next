import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.bannerBg}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>
          Trusted to solve engineering challenges by market leaders
        </span>
        <div className={styles.logoContainer}>
          <Image src='/images/Logo Saipem.svg' width={48} height={62} />
          <Image src='/images/Logo Technip.svg' width={122} height={46} />
          <Image src='/images/Logo EDF.svg' width={112} height={48} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
