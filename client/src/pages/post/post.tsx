import { AppRoute, DataStatus } from 'common/enums/enums';
import { CommentCreateFormDto, FC } from 'common/types/types';
import { Button, Input } from 'components/components';
import { getFormattedDate, getNameOf, sanitizeHtml } from 'helpers/helpers';
import {
  useAppDispatch,
  useAppForm,
  useAppSelector,
  useEffect,
  useParams,
} from 'hooks/hooks';
import { postActions } from 'store/actions';
import { commentCreate as commentCreateValidationSchema } from 'validation-schemas/validation-schemas';

import { COMMENT_FORM_DEFAULT_VALUES } from './common';
import styles from './styles.module.scss';

const Post: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { post, dataStatus } = useAppSelector((state) => state.post);
  const { control, errors, handleSubmit, reset } =
    useAppForm<CommentCreateFormDto>({
      defaultValues: COMMENT_FORM_DEFAULT_VALUES,
      validationSchema: commentCreateValidationSchema,
    });

  useEffect(() => {
    dispatch(postActions.getById(Number(id)));
  }, [id]);

  const handleCreateComment = ({ text }: CommentCreateFormDto): void => {
    dispatch(postActions.createComment({ postId: Number(id), text }))
      .unwrap()
      .then(() => reset());
  };

  const handleDelete = (): void => {
    dispatch(postActions.deletePost(Number(id)));
  };

  if (dataStatus === DataStatus.PENDING) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post Not Found</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <div className={styles.titleWrapper}>
          <h1>{post.title}</h1>
          <div className={styles.buttonsWrapper}>
            <Button
              to={`${AppRoute.POSTS}/${id}${AppRoute.EDIT}` as AppRoute}
              label="Update"
            />
            <Button onClick={handleDelete} label="Delete" />
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}></p>
      </div>
      <div className={styles.commentsWrapper}>
        <h3>Comments:</h3>
        {post.comments.map((comment) => (
          <div className={styles.comment}>
            <p>{comment.text}</p>
            <span>{getFormattedDate(comment.createdAt, 'dd/MM/yyyy')}</span>
          </div>
        ))}
        <form onSubmit={handleSubmit(handleCreateComment)}>
          <Input
            control={control}
            errors={errors}
            label="New Comment"
            name={getNameOf<CommentCreateFormDto>('text')}
            placeholder="Comment"
          />
          <div className={styles.btnWrapper}>
            <Button label="Send" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export { Post };
