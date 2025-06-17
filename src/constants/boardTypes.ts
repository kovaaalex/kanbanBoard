export interface Board {
  id: string;
  name: string;
}

export interface BoardsState {
  boards: Board[];
  lastId: number;
}
export const initialBoardState: BoardsState = {
  boards: [
    { id: '1', name: 'To Do' },
    { id: '2', name: 'In Progress' },
    { id: '3', name: 'Done' },
  ],
  lastId: 3,
};
