import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Route, Routes } from 'components/components';
import { Home, PostsNew } from 'pages/pages';

const App: FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />} />
      <Route path={AppRoute.POSTS_NEW} element={<PostsNew />} />
    </Routes>
  );
};

export { App };
