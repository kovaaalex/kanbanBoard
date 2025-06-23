import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BoardsState } from '@/types/IStore/IBoardState';
export const initialBoardState: BoardsState = {
  boards: [
    { id: '1', name: 'To Do', color: '#4F46E5' },
    { id: '2', name: 'In Progress', color: '#F59E0B' },
    { id: '3', name: 'Done', color: '#22C55E' },
  ],
  lastId: 3,
};
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
          color: '#DC2626',
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
    dropBoard: (state, action: PayloadAction<string>) => {
      const boardId = action.payload;
      state.boards = state.boards.filter((item) => item.id !== boardId);
    },
    changeBoardColor: (
      state,
      action: PayloadAction<{ boardId: string; newColor: string }>
    ) => {
      const { boardId, newColor } = action.payload;
      const boardIndex = state.boards.findIndex(
        (board) => board.id === boardId
      );
      if (boardIndex !== -1) {
        state.boards[boardIndex].color = newColor;
      }
    },
  },
});

export const { addCustomBoard, renameBoard, dropBoard, changeBoardColor } =
  boardsSlice.actions;
export default boardsSlice.reducer;
