import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: localStorage.getItem('theme') || 'light',
  reducers: {
    toggleTheme: state => state === 'light' ? 'dark' : 'light',
    setTheme: (_, action: PayloadAction<'light' | 'dark'>)=>action.payload
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;