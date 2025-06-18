import { Column, H4, Plus, SaveButton, TaskLength } from './styled';
interface BoardColumnProps {
  color: string;
  currentBoard: string;
  showSave: boolean;
  taskCount: number;
  onBoardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onAddTask: () => void;
}
export const BoardColumn = ({
  color,
  currentBoard,
  showSave,
  taskCount,
  onBoardChange,
  onSave,
  onAddTask,
}: BoardColumnProps) => {
  return (
    <Column $statusColor={color}>
      <TaskLength $statusColor={color}>{taskCount}</TaskLength>
      <H4
        value={currentBoard}
        minLength={2}
        maxLength={25}
        onChange={onBoardChange}
      />
      {showSave ? (
        <SaveButton onClick={onSave}>Save</SaveButton>
      ) : (
        <Plus onClick={onAddTask} />
      )}
    </Column>
  );
};
