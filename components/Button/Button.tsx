import { ArrowIcon } from './ArrowIcon';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ appearance, arrow = "none", children, className, ...props }: ButtonProps): React.ReactElement => {
  return (
    <button className={cn(styles.button, styles[appearance], className)} {...props}>
      {children}
      {arrow !== "none" && <ArrowIcon className={cn(styles.arrow, styles[arrow])} />}
    </button>
  );
};
