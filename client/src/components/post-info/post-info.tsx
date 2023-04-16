import { AppRoute } from 'common/enums/enums';
import { FC, PostResponseDto } from 'common/types/types';
import { Button } from 'components/components';
import { getFormattedDate } from 'helpers/helpers';

import styles from './styles.module.scss';

type Props = {
  post: PostResponseDto;
  onDelete: (id: number) => void;
};

const PostInfo: FC<Props> = ({ post, onDelete }) => {
  const handleDelete = (): void => {
    onDelete(post.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div>
          <h2 className={styles.title}>{post.title}</h2>
        </div>
        <div>
          <span>
            Created at: {getFormattedDate(post.createdAt, 'dd/MM/yyyy')}
          </span>
        </div>
      </div>
      <div className={styles.actionsWrapper}>
        <div className={styles.btnWrapper}>
          <Button
            to={`${AppRoute.POSTS}/${post.id}${AppRoute.EDIT}` as AppRoute}
            label="Update"
          />
        </div>
        <div className={styles.btnWrapper}>
          <Button onClick={handleDelete} label="Delete" />
        </div>
        <div className={styles.btnWrapper}>
          <Button
            to={`${AppRoute.POSTS}/${post.id}` as AppRoute}
            label="Read more"
          />
        </div>
      </div>
    </div>
  );
};

export { PostInfo };
