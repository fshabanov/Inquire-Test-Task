import {
  FC,
  FormControl,
  FormControlPath,
  FormErrors,
} from 'common/types/types';
import { ErrorMessage } from 'components/components';
import { useFormController } from 'hooks/hooks';

import styles from './styles.module.scss';

type Props = {
  control: FormControl;
  errors: FormErrors;
  label: string;
  name: FormControlPath;
  type?: 'text';
  placeholder?: string;
};

const Input: FC<Props> = ({
  control,
  errors,
  label,
  name,
  type = 'text',
  placeholder = '',
}) => {
  const { field } = useFormController({ name, control });

  return (
    <label className={styles.label}>
      <span className={styles.title}>{label}</span>
      <input
        {...field}
        value={field.value ?? ''}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
      <span className={styles.error}>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </label>
  );
};

export { Input };
