import {
  FormControl,
  FormErrors,
  FormValues,
  ValidationSchema,
} from 'common/types/types';
import { getFormValidationResolver } from 'helpers/helpers';
import {
  useForm,
  UseFormHandleSubmit,
  UseFormReset,
  ValidationMode,
} from 'react-hook-form';

type UseAppFormArguments = {
  defaultValues: Record<string, unknown>;
  validationSchema: ValidationSchema;
  mode?: keyof ValidationMode;
};

type UseAppFormResult<T extends FormValues = FormValues> = {
  control: FormControl;
  errors: FormErrors;
  handleSubmit: UseFormHandleSubmit<T>;
  reset: UseFormReset<T>;
};

const useAppForm = <T extends FormValues = FormValues>({
  validationSchema,
  defaultValues,
  mode = 'onSubmit',
}: UseAppFormArguments): UseAppFormResult<T> => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues,
    resolver: validationSchema
      ? getFormValidationResolver(validationSchema)
      : undefined,
    mode,
  });

  return {
    handleSubmit: handleSubmit as UseFormHandleSubmit<T>,
    control,
    errors,
    reset: reset as UseFormReset<T>,
  };
};

export { useAppForm };
