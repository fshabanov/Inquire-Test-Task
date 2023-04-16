import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig, NotificationPayload } from 'common/types/types';

import { ActionType } from './common';

const notify = createAsyncThunk<void, NotificationPayload, AsyncThunkConfig>(
  ActionType.NOTIFY,
  ({ message, type }, { extra }) => {
    const { notification } = extra;

    return notification[type](message);
  },
);

export { notify };
