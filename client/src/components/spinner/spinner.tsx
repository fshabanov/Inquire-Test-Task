import { FC } from 'common/types/types';

import styles from './styles.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
};

export { Spinner };
