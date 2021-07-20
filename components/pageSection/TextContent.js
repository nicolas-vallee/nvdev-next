import cn from 'classnames';
import styles from './TextContent.module.scss';

const TextContent = (props) => {
  return (
    <div
      className={cn(styles.textContent, {
        col3lg: props.col3lg,
        col4lg: props.col4lg,
      })}
    >
      {props.children}
    </div>
  );
};

export default TextContent;
