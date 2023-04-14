import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Route, Routes } from 'components/components';
import { Home } from 'pages/pages';

const App: FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />} />
    </Routes>
  );
};

export { App };
