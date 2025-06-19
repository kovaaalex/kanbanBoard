export interface IBoard {
  id: string;
  name: string;
  color: string;
}

export interface BoardsState {
  boards: IBoard[];
  lastId: number;
}
export const initialBoardState: BoardsState = {
  boards: [
    { id: '1', name: 'To Do', color: '#4F46E5' },
    { id: '2', name: 'In Progress', color: '#F59E0B' },
    { id: '3', name: 'Done', color: '#22C55E' },
  ],
  lastId: 3,
};
