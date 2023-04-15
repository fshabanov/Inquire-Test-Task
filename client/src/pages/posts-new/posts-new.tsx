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
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <Input
        control={control}
        errors={errors}
        label="Title"
        name={getNameOf<PostCreateRequestDto>('title')}
      />
      <TextEditor
        control={control}
        errors={errors}
        name={getNameOf<PostCreateRequestDto>('content')}
      />
      <div className={styles.btnWrapper}>
        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
};

export { PostsNew };
