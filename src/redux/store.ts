import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice.ts';
import searchReducer from './searchSlice.ts';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;