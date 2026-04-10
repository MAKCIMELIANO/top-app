import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({tag = "p14", children}: PtagProps): React.ReactElement => {
  return (
    <>
      {tag === 'p14' && <p className={styles.p14}>{children}</p>}
      {tag === 'p16' && <p className={styles.p16}>{children}</p>}
      {tag === 'p18' && <p className={styles.p18}>{children}</p>}
    </>
  );
};