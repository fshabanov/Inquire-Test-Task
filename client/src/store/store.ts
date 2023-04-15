import { configureStore } from '@reduxjs/toolkit';
import { commentApi, postApi } from 'services/services';

import { rootReducer } from './root-reducer';

const extraArgument = {
  commentApi,
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
