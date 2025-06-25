export type BoardName = 'To Do' | 'In Progress' | 'Done' | string;
export interface IBoard {
  id: string;
  name: BoardName;
  color: string;
}
export interface DropItem {
  taskId: number;
  fromStatus: string;
}
