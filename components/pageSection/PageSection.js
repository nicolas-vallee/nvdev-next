import cn from 'classnames';
import styles from './PageSection.module.scss';

const PageSection = (props) => {
  return (
    <section
      className={cn(styles.sectionContainer, {
        [styles.sectionLightBg]: props.lightBg,
      })}
    >
      <div className={styles.pageSection}>{props.children}</div>
    </section>
  );
};

export default PageSection;
