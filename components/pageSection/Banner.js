import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.bannerBg}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>
          Trusted to solve engineering challenges by market leaders
        </span>
      </div>
    </div>
  );
};

export default Banner;
