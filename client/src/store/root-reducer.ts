import { reducer as home } from './home/reducer';
import { reducer as post } from './post/reducer';
import { reducer as postCreate } from './post-create/reducer';
import { reducer as postUpdate } from './post-update/reducer';

const rootReducer = {
  home,
  post,
  postCreate,
  postUpdate,
};

export { rootReducer };
