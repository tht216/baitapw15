import {configureStore} from '@reduxjs/toolkit';
import ReduxSlices from './screen/reduxToolkit/ReduxSlices';

export const store = configureStore({
  reducer: {
    reduxReducer: ReduxSlices,
  },
});
