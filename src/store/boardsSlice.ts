import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { defaultBoardsState } from '../constants/boardTypes';

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: defaultBoardsState,
  reducers: {
    addCustomBoard: (state, action: PayloadAction<string>) => {
      const newBoard = action.payload;
      if (!state.customBoards.includes(newBoard)) {
        state.customBoards.push(newBoard);
        state.activeBoards.push(newBoard);
      }
    },
  },
});

export const { addCustomBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
