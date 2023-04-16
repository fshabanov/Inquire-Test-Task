import { FC, PostCreateRequestDto } from 'common/types/types';
import { Button, Input, TextEditor } from 'components/components';
import { getNameOf } from 'helpers/helpers';
import { useAppDispatch, useAppForm } from 'hooks/hooks';
import { postCreateActions } from 'store/actions';
import { postCreate as postCreateValidationSchema } from 'validation-schemas/validation-schemas';

import { POST_CREATE_DEFAULT_VALUES } from './common';
import styles from './styles.module.scss';

const PostsNew: FC = () => {
  const dispatch = useAppDispatch();
  const { control, errors, handleSubmit } = useAppForm<PostCreateRequestDto>({
    defaultValues: POST_CREATE_DEFAULT_VALUES,
    validationSchema: postCreateValidationSchema,
  });

  const handleCreatePost = ({ content, title }: PostCreateRequestDto): void => {
    dispatch(postCreateActions.create({ content, title }));
  };

  return (
    <div className={styles.formWrapper}>
      <h1>Add a new post</h1>
      <form onSubmit={handleSubmit(handleCreatePost)}>
        <div className={styles.inputWrapper}>
          <Input
            control={control}
            errors={errors}
            label="Title"
            name={getNameOf<PostCreateRequestDto>('title')}
          />
        </div>
        <div className={styles.inputWrapper}>
          <TextEditor
            control={control}
            errors={errors}
            name={getNameOf<PostCreateRequestDto>('content')}
          />
        </div>
        <div className={styles.btnWrapper}>
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export { PostsNew };
