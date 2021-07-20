import cn from 'classnames';
import styles from './TextContent.module.scss';

const TextContent = (props) => {
  return (
    <div
      className={cn(styles.textContent, {
        [styles.col3lg]: props.col3lg,
      })}
    >
      {props.children}
    </div>
  );
};

export default TextContent;
