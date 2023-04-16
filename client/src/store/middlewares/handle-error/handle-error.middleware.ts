import { Middleware } from '@reduxjs/toolkit';
import { NotificationType } from 'common/enums/enums';
import { MiddlewareArguments } from 'common/types/types';
import { appActions } from 'store/actions';

const handleError: Middleware =
  ({ dispatch }: MiddlewareArguments) =>
  (next) =>
  (action): void => {
    if (action.error) {
      const { message } = action.error;
      dispatch(appActions.notify({ type: NotificationType.ERROR, message }));
    }

    return next(action);
  };

export { handleError };
