import { FC, PostUpdateRequestDto } from 'common/types/types';
import { Button, Input, TextEditor } from 'components/components';
import { getNameOf } from 'helpers/helpers';
import {
  useAppDispatch,
  useAppForm,
  useAppSelector,
  useEffect,
  useParams,
} from 'hooks/hooks';
import { postUpdateActions } from 'store/actions';
import { postUpdate as postUpdateValidationSchema } from 'validation-schemas/validation-schemas';

import { POST_UPDATE_DEFAULT_VALUES } from './common';
import styles from './styles.module.scss';

const PostUpdate: FC = () => {
  const { post } = useAppSelector((state) => state.postUpdate);
  const dispatch = useAppDispatch();
  const { control, errors, handleSubmit, reset } =
    useAppForm<PostUpdateRequestDto>({
      defaultValues: POST_UPDATE_DEFAULT_VALUES,
      validationSchema: postUpdateValidationSchema,
    });
  const { id } = useParams();

  const handleUpdatePost = ({ content, title }: PostUpdateRequestDto): void => {
    dispatch(postUpdateActions.update({ content, title, id: Number(id) }));
  };

  useEffect(() => {
    dispatch(postUpdateActions.getById(Number(id)));
  }, [id]);

  useEffect(() => {
    if (post) {
      reset({ title: post.title, content: post.content });
    }
  }, [post]);

  if (!post) {
    return <p>Post was not found</p>;
  }

  return (
    <div>
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit(handleUpdatePost)}>
        <Input
          control={control}
          errors={errors}
          label="Title"
          name={getNameOf<PostUpdateRequestDto>('title')}
        />
        <TextEditor
          control={control}
          errors={errors}
          name={getNameOf<PostUpdateRequestDto>('content')}
          initialValue={post.content}
        />
        <div className={styles.btnWrapper}>
          <Button type="submit" label="Update" />
        </div>
      </form>
    </div>
  );
};

export { PostUpdate };
