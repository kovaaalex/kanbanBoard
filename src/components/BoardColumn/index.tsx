import { useCallback, useState } from 'react';

import { FaPalette, FaTrashAlt } from 'react-icons/fa';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import { ColorPicker } from '@/components/ColorPicker/index';
import { dropBoard } from '@/store/slices/boardsSlice';
import { dropTaskStatus } from '@/store/slices/taskSlice';
import type { ColorKey } from '@/types/colorTypes';
import type { BoardColumnProps } from '@/types/IComponents/IBoardColumn';
import { getColorStyles } from '@/utils/getColorStyles';

import {
  ColorPickerButton,
  Column,
  DeleteButton,
  H4,
  Plus,
  SaveButton,
  TaskLength,
} from './styled';

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
  const tasks = useAppSelector(
    (state) => state.tasks.tasks[currentBoard] || []
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const columnColor = getColorStyles(color).textColor;
  const handleColorChange = (newColor: ColorKey) => {
    onChangeColor(newColor);
    setShowColorPicker(false);
  };
  const handleDelete = useCallback(() => {
    dispatch(dropTaskStatus(currentBoard));
    dispatch(dropBoard(boardId));
  }, [boardId]);

  const toggleColorPicker = useCallback(() => {
    setShowColorPicker((prev) => !prev);
  }, []);

  return (
    <Column $statusColor={columnColor}>
      <TaskLength $statusColor={columnColor}>{tasks.length}</TaskLength>
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
      {showColorPicker && <ColorPicker onChange={handleColorChange} />}
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
