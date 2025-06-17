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
  },
});

export const { addCustomBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
