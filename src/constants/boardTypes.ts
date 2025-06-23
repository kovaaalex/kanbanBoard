import type { IBoard } from '@/types/IComponents/IBoard';

export interface BoardsState {
  boards: IBoard[];
  lastId: number;
}
//types
//const для цветов
export const initialBoardState: BoardsState = {
  boards: [
    { id: '1', name: 'To Do', color: '#4F46E5' },
    { id: '2', name: 'In Progress', color: '#F59E0B' },
    { id: '3', name: 'Done', color: '#22C55E' },
  ],
  lastId: 3,
};
