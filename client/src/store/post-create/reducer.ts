import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from 'common/enums/enums';

import { create } from './actions';

type State = {
  dataStatus: DataStatus;
};

const initialtate: State = {
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialtate, (builder) => {
  builder.addCase(create.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(create.fulfilled, (state) => {
    state.dataStatus = DataStatus.FULFILLED;
  });
  builder.addCase(create.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export { reducer };
