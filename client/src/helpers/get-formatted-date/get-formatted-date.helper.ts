import { format } from 'date-fns';

type FormatType = 'dd/MM/yyyy';

const getFormattedDate = (date: string, type: FormatType): string => {
  const dateObj = new Date(date);

  return format(dateObj, type);
};

export { getFormattedDate };
