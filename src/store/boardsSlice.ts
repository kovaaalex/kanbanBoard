import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { initialBoardState } from '../constants/boardTypes';

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: initialBoardState,
  reducers: {
    addCustomBoard: (state, action: PayloadAction<string>) => {
      const newBoard = action.payload;
      const isNameExists = state.boards.some((item) => item.name === newBoard);
      if (!isNameExists) {
        const newId = (state.lastId + 1).toString();
        state.boards.push({
          id: newId,
          name: newBoard,
        });
        state.lastId += 1;
      }
    },
    renameCustomBoard: (
      state,
      action: PayloadAction<{
        id: string;
        newName: string;
      }>
    ) => {
      const { id, newName } = action.payload;
      const boardToRename = state.boards.find((board) => board.id === id);
      if (boardToRename) {
        const isNameExists = state.boards.some(
          (item) =>
            item.id !== id && item.name.toLowerCase() === newName.toLowerCase()
        );
        if (!isNameExists) {
          boardToRename.name = newName;
        }
      }
    },
  },
});

export const { addCustomBoard, renameCustomBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
