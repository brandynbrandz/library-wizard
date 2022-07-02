import { configureStore } from '@reduxjs/toolkit';
import wizardReducer from './reducers';

export const store = configureStore({
  reducer: {
    wizardReducer
  },
});
