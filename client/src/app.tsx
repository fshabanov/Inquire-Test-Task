import { AppRoute } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Navbar, Route, Routes } from 'components/components';
import { Home, Post, PostsNew, PostUpdate } from 'pages/pages';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={AppRoute.HOME} element={<Home />} />
        <Route path={AppRoute.POSTS_NEW} element={<PostsNew />} />
        <Route path={AppRoute.POSTS_$ID} element={<Post />} />
        <Route path={AppRoute.POSTS_$ID_EDIT} element={<PostUpdate />} />
      </Routes>
    </>
  );
};

export { App };
