import { FC } from 'common/types/types';
import { Link } from 'components/components';

import { NAVBAR_ROUTES } from './common';
import styles from './styles.module.scss';

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.itemsContainer}>
        {NAVBAR_ROUTES.map(({ route, title, id }) => (
          <div key={id}>
            <Link to={route} className={styles.link}>
              {title}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
