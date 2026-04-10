import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = "s", color = "ghost", children, className, href, ...props }: TagProps): React.ReactElement => {
  // Определяем общие классы
  const classes = cn(styles.tag, styles[size], styles[color], className);

  return (
    href
      ? <a href={href} className={classes}  >{children}</a>
      : <div className={classes} {...props}>{children}</div>
  );
};
