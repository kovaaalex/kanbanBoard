import { FaPalette, FaTrashAlt } from 'react-icons/fa';
import {
  ColorPickerButton,
  Column,
  DeleteButton,
  H4,
  Plus,
  SaveButton,
  TaskLength,
} from './styled';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { dropBoard } from '@/store/boardsSlice';
import { dropTaskStatus } from '@/store/taskSlice';
import { useCallback, useState } from 'react';
import { ColorPicker } from '@/components/ColorPicker/Index';
export interface BoardColumnProps {
  color: string;
  currentBoard: string;
  showSave: boolean;
  onBoardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onAddTask: () => void;
  boardId: string;
  onChangeColor: (color: string) => void;
}
export const BoardColumn = ({
  color,
  currentBoard,
  showSave,
  onBoardChange,
  onSave,
  onAddTask,
  boardId,
  onChangeColor,
}: BoardColumnProps) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks[currentBoard]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleColorChange = (newColor: string) => {
    onChangeColor(newColor);
    setShowColorPicker(false);
  };
  const handleDelete = () => {
    dispatch(dropTaskStatus(currentBoard));
    dispatch(dropBoard(boardId));
  };
  const toggleColorPicker = useCallback(() => {
    setShowColorPicker((prev) => !prev);
  }, []);
  return (
    <Column $statusColor={color}>
      <TaskLength $statusColor={color}>{tasks.length}</TaskLength>
      <H4
        name={boardId}
        id={boardId}
        value={currentBoard}
        minLength={2}
        maxLength={25}
        onChange={onBoardChange}
      />
      <ColorPickerButton onClick={toggleColorPicker}>
        <FaPalette />
      </ColorPickerButton>
      {showColorPicker && (
        <ColorPicker onChange={handleColorChange}></ColorPicker>
      )}
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
