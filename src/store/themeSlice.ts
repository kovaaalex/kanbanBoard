import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  currentTheme: 'light' | 'dark';
};
const initialState: ThemeState = {
  currentTheme: 'light',
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme(state) {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.currentTheme = action.payload;
    },
  },
});
export const { toogleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
