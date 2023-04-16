import { DataStatus } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { PostInfo, Spinner } from 'components/components';
import { useAppDispatch, useAppSelector, useEffect } from 'hooks/hooks';
import { homeActions } from 'store/actions';

const Home: FC = () => {
  const { posts, dataStatus } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(homeActions.getAll());
  }, []);

  const handleDelete = (id: number): void => {
    dispatch(homeActions.deletePost(id));
  };

  if (dataStatus === DataStatus.PENDING) {
    return <Spinner />;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostInfo key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export { Home };
