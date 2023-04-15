import { extraArgument } from 'store/store';

import { AppDispatch } from './app-dispatch.type';
import { AppState } from './app-state.type';

type AsyncThunkConfig = {
  state: AppState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
};

export { type AsyncThunkConfig };
