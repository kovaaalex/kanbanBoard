import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BoardsState } from '../constants/taskTypes';

const initialState: BoardsState = {
  defaultBoards: ['To Do', 'In Progress', 'Done'],
  customBoards: [],
  activeBoards: ['To Do', 'In Progress', 'Done'],
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
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
