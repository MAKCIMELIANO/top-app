import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): React.ReactElement => {
  return (
    <button className={cn(styles.button, styles[appearance], className)} {...props}>
      {children}
    </button>
  );
};
