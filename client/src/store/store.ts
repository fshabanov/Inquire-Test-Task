import { configureStore } from '@reduxjs/toolkit';
import { commentApi, notification, postApi } from 'services/services';

import { rootReducer } from './root-reducer';

const extraArgument = {
  commentApi,
  notification,
  postApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument },
    });
  },
});

export { extraArgument, store };
