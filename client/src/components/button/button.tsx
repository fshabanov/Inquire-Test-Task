import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Link } from 'components/components';

import styles from './styles.module.scss';

type Props = {
  label: string;
  color?: 'blue';
  type?: 'button' | 'submit';
  onClick?: () => void;
  to?: AppRoute;
};

const Button: FC<Props> = ({ label, type = 'button', onClick, to }) => {
  const isLink = Boolean(to);

  if (isLink) {
    return (
      <Link to={to as AppRoute} className={styles.btn}>
        {label}
      </Link>
    );
  }

  return (
    <>
      <button type={type} className={styles.btn} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export { Button };
