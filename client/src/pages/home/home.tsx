import { FC } from 'common/types/types';
import { PostInfo } from 'components/components';
import { useAppDispatch, useAppSelector, useEffect } from 'hooks/hooks';
import { homeActions } from 'store/actions';

const Home: FC = () => {
  const { posts } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(homeActions.getAll());
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};

export { Home };
