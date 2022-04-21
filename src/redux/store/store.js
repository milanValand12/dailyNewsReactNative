import {configureStore} from '@reduxjs/toolkit';
import newsReducer from '../slices/NewsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
