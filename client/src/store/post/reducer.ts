import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from 'common/enums/enums';
import { PostWithCommentsResponseDto } from 'common/types/types';

import { deletePost, getById } from './actions';

type State = {
  dataStatus: DataStatus;
  post: PostWithCommentsResponseDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  post: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getById.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(getById.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.post = payload;
  });
  builder.addCase(getById.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });

  builder.addCase(deletePost.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(deletePost.fulfilled, (state) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.post = null;
  });
  builder.addCase(deletePost.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export { reducer };
