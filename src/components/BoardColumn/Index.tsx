import { FaTrashAlt } from 'react-icons/fa';
import {
  Column,
  DeleteButton,
  H4,
  Plus,
  SaveButton,
  TaskLength,
} from './styled';
import { useAppDispatch } from '@/store/hooks';
import { dropBoard } from '@/store/boardsSlice';
import { dropTaskStatus } from '@/store/taskSlice';
interface BoardColumnProps {
  color: string;
  currentBoard: string;
  showSave: boolean;
  taskCount: number;
  onBoardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onAddTask: () => void;
  boardId: string;
}
export const BoardColumn = ({
  color,
  currentBoard,
  showSave,
  taskCount,
  onBoardChange,
  onSave,
  onAddTask,
  boardId,
}: BoardColumnProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(dropTaskStatus(currentBoard));
    dispatch(dropBoard(boardId));
  };
  return (
    <Column $statusColor={color}>
      <TaskLength $statusColor={color}>{taskCount}</TaskLength>
      <H4
        value={currentBoard}
        minLength={2}
        maxLength={25}
        onChange={onBoardChange}
      />
      <DeleteButton onClick={handleDelete}>
        <FaTrashAlt />
      </DeleteButton>
      {showSave ? (
        <SaveButton onClick={onSave}>Save</SaveButton>
      ) : (
        <Plus onClick={onAddTask} />
      )}
    </Column>
  );
};
