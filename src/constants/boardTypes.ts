export interface BoardsState {
  defaultBoards: string[];
  customBoards: string[];
  activeBoards: string[];
}
export const defaultBoardsState: BoardsState = {
  defaultBoards: ['To Do', 'In Progress', 'Done'],
  customBoards: [],
  activeBoards: ['To Do', 'In Progress', 'Done'],
};
