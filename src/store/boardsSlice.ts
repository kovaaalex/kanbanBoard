import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { initialBoardState } from '@/constants/boardTypes';

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: initialBoardState,
  reducers: {
    addCustomBoard: (state, action: PayloadAction<string>) => {
      const newBoardName = action.payload;
      const isNameExists = state.boards.some(
        (board) => board.name.toLowerCase() === newBoardName.toLowerCase()
      );

      if (!isNameExists) {
        const newId = (state.lastId + 1).toString();
        state.boards.push({
          id: newId,
          name: newBoardName,
        });
        state.lastId += 1;
      }
    },
    renameBoard: (
      state,
      action: PayloadAction<{ oldName: string; newName: string }>
    ) => {
      const { oldName, newName } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.name === oldName
      );
      if (boardIndex !== -1) {
        state.boards[boardIndex].name = newName;
      }
    },
  },
});

export const { addCustomBoard, renameBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
