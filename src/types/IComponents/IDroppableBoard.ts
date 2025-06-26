import type { BoardName } from './IBoard';
export interface DroppableBoardProps {
  status: BoardName;
  children: React.ReactNode;
  onDrop: (item: { taskId: number; fromStatus: BoardName }) => void;
}
