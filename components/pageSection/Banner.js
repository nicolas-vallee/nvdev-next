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
          <Image
            src='/images/Logo Saipem.svg'
            width={48}
            height={62}
            alt='Saipem is one of the largest oilfield services company in the world.'
          />
          <Image
            src='/images/Logo Technip.svg'
            width={122}
            height={46}
            alt='Technip provides complete life cycle services for the energy industry.'
          />
          <Image
            src='/images/Logo EDF.svg'
            width={112}
            height={48}
            alt='EDF is a multinational electric utility company.'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
