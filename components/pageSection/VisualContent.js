import cn from 'classnames';
import styles from './VisualContent.module.scss';

const VisualContent = (props) => {
  return (
    <div
      className={cn(styles.visualContent, {
        col2lg: props.col2lg,
        col3lg: props.col3lg,
        col4lg: props.col4lg,
        centered: props.centered,
        [styles.visualLeft]: props.visualLeft,
        [styles.visualFirst]: props.visualFirst,
      })}
    >
      <div className={styles.visualElementContainer}>{props.children}</div>
      {props.caption && <span className={styles.caption}>{props.caption}</span>}
    </div>
  );
};

export default VisualContent;
