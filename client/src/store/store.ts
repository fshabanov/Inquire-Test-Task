import { configureStore } from '@reduxjs/toolkit';
import {
  commentApi,
  navigation,
  notification,
  postApi,
} from 'services/services';

import { handleError } from './middlewares/middlewares';
import { rootReducer } from './root-reducer';

const extraArgument = {
  commentApi,
  navigation,
  notification,
  postApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument },
    }).concat([handleError]);
  },
});

export { extraArgument, store };
