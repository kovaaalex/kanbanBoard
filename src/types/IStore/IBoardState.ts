import type { IBoard } from '@/types/IComponents/IBoard';

export interface BoardsState {
  boards: IBoard[];
  lastId: number;
}
