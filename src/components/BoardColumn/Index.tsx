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
import { useAppDispatch } from '@/store/hooks';
import { dropBoard } from '@/store/boardsSlice';
import { dropTaskStatus } from '@/store/taskSlice';
import { useState } from 'react';
import { ColorPicker } from '../ColorPicker/Index';
import type { BoardColumnProps } from '@/constants/boardTypes';
export const BoardColumn = ({
  color,
  currentBoard,
  showSave,
  taskCount,
  onBoardChange,
  onSave,
  onAddTask,
  boardId,
  onChangeColor,
}: BoardColumnProps) => {
  const dispatch = useAppDispatch();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleColorChange = (newColor: string) => {
    onChangeColor(newColor);
    setShowColorPicker(false);
  };
  const handleDelete = () => {
    dispatch(dropTaskStatus(currentBoard));
    dispatch(dropBoard(boardId));
  };
  return (
    <Column $statusColor={color}>
      <TaskLength $statusColor={color}>{taskCount}</TaskLength>
      <H4
        name={boardId}
        id={boardId}
        value={currentBoard}
        minLength={2}
        maxLength={25}
        onChange={onBoardChange}
      />
      <ColorPickerButton onClick={() => setShowColorPicker(!showColorPicker)}>
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
