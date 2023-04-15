import { reducer as homeReducer } from './home/reducer';
import { reducer as postReducer } from './post/reducer';
import { reducer as postCreateReducer } from './post-create/reducer';
import { reducer as postUpdateReducer } from './post-update/reducer';

const rootReducer = {
  homeReducer,
  postReducer,
  postCreateReducer,
  postUpdateReducer,
};

export { rootReducer };
