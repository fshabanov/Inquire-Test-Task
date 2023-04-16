import { AppRoute } from 'common/enums/enums';

type NavbarItem = {
  title: string;
  route: AppRoute;
  id: number;
};

const NAVBAR_ROUTES: NavbarItem[] = [
  {
    title: 'All Posts',
    route: AppRoute.HOME,
    id: 1,
  },
  {
    title: 'Add New Post',
    route: AppRoute.POSTS_NEW,
    id: 2,
  },
];

export { NAVBAR_ROUTES };
