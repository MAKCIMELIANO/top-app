import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

export const Header = ({ className, ...props }: HeaderProps): React.ReactElement => {
  return (
    <header className={`${styles.header} ${className}`} {...props}>
      <h1>Header</h1>
    </header>
  );
};
