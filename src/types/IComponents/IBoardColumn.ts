import type { ColorKey } from '../colorTypes';
export interface BoardColumnProps {
  color: ColorKey;
  currentBoard: string;
  showSave: boolean;
  onBoardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onAddTask: () => void;
  boardId: string;
  onChangeColor: (color: ColorKey) => void;
}
