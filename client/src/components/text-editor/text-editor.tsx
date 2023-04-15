import { Editor } from '@tinymce/tinymce-react';
import { ENV } from 'common/enums/enums';
import {
  FC,
  FormControl,
  FormControlPath,
  FormErrors,
} from 'common/types/types';
import { ErrorMessage } from 'components/components';
import { useFormController } from 'hooks/hooks';

type Props = {
  initialValue?: string;
  control: FormControl;
  errors: FormErrors;
  name: FormControlPath;
};

const TextEditor: FC<Props> = ({
  initialValue = '',
  control,
  errors,
  name,
}) => {
  const { field } = useFormController({ name, control });

  return (
    <>
      <Editor
        apiKey={ENV.TEXT_EDITOR.API_KEY}
        initialValue={initialValue}
        init={{
          branding: false,
          height: 400,
          menubar: true,
          toolbar:
            'formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify',
        }}
        onEditorChange={field.onChange}
      />
      <ErrorMessage errors={errors} name={name} />
    </>
  );
};

export { TextEditor };
