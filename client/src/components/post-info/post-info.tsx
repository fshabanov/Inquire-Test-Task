import { AppRoute } from 'common/enums/enums';
import { FC, PostResponseDto } from 'common/types/types';
import { Link } from 'components/components';
import { getFormattedDate } from 'helpers/helpers';

import styles from './styles.module.scss';

type Props = {
  post: PostResponseDto;
};

const PostInfo: FC<Props> = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div>
          <h2>{post.title}</h2>
        </div>
        <div>
          <p>{post.content}</p>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <div>
          <Link to={`${AppRoute.POSTS}/${post.id}`}>Read more</Link>
        </div>
        <div>
          <span>
            Created at: {getFormattedDate(post.createdAt, 'dd/MM/yyyy')}
          </span>
        </div>
      </div>
    </div>
  );
};

export { PostInfo };
