import cn from 'classnames';
import styles from './PageSection.module.scss';

const PageSection = (props) => {
  return (
    <section
      className={cn(styles.sectionContainer, styles.pageSection, {
        [styles.sectionLightBg]: props.lightBg,
      })}
    >
      {props.children}
    </section>
  );
};

export default PageSection;
