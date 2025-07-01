import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch } from '@/hooks/hooks';

import { BoardColumn } from '@/components/BoardColumn/index';
import { DroppableBoard } from '@/components/DroppableBoard/index';
import Tasks from '@/components/Tasks/index';
import { DEFAULT_TASK } from '@/constants/task';
import { changeBoardColor, renameBoard } from '@/store/slices/boardsSlice';
import {
  addTask,
  initializeBoardTasks,
  moveTask,
  renameTaskStatus,
} from '@/store/slices/taskSlice';
import type { ColorKey } from '@/types/colorTypes';
import type { BoardName } from '@/types/IComponents/IBoard';
import { type IBoard } from '@/types/IComponents/IBoard';
import { getColorStyles } from '@/utils/getColorStyles';

import { AddTask, AddTaskButton, BoardItem } from './styled';

const Board = ({ item }: { item: IBoard }) => {
  const { id, name, color } = item;
  const dispatch = useAppDispatch();
  const [currentBoard, setBoard] = useState(name);
  const [showSave, setShowSave] = useState(false);
  const [currentColor, setCurrentColor] = useState(color as ColorKey);
  useEffect(() => {
    dispatch(initializeBoardTasks(name));
  }, [name]);
  const handleDrop = useCallback(
    (item: { taskId: number; fromStatus: BoardName }) => {
      if (item.fromStatus !== name) {
        dispatch(
          moveTask({
            taskId: item.taskId,
            fromStatus: item.fromStatus,
            toStatus: name,
          })
        );
      }
    },
    [name]
  );
  const handleBoardChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBoard(e.target.value);
      setShowSave(true);
    },
    []
  );
  const handleAddTask = useCallback(() => {
    dispatch(
      addTask({
        status: name,
        task: DEFAULT_TASK,
      })
    );
  }, [name]);
  const handleSave = useCallback(() => {
    if (currentBoard.trim() !== name && currentBoard.trim() !== '') {
      const newName = currentBoard.trim() as BoardName;
      dispatch(renameBoard({ oldName: name, newName }));
      dispatch(renameTaskStatus({ oldStatus: name, newStatus: newName }));
      setShowSave(false);
    }
  }, [currentBoard]);
  const handleColorChange = useCallback(
    (newColor: ColorKey) => {
      setCurrentColor(newColor);
      dispatch(changeBoardColor({ boardId: id, newColor }));
    },
    [id]
  );
  return (
    <BoardItem>
      <DroppableBoard status={name} onDrop={handleDrop}>
        <BoardColumn
          color={currentColor}
          currentBoard={currentBoard}
          showSave={showSave}
          onBoardChange={handleBoardChange}
          onSave={handleSave}
          onAddTask={handleAddTask}
          boardId={id}
          onChangeColor={handleColorChange}
        />
        <Tasks title={name} />
        <AddTask>
          <AddTaskButton
            onClick={handleAddTask}
            $statusColor={getColorStyles(currentColor)}
          >
            Add task...
          </AddTaskButton>
        </AddTask>
      </DroppableBoard>
    </BoardItem>
  );
};

export default Board;
