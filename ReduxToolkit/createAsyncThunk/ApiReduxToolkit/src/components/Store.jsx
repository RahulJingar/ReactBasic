import { configureStore } from '@reduxjs/toolkit';
import ApiReducer from './ApiSlice';

export default configureStore({
  reducer: {
    api: ApiReducer,
  },
});

