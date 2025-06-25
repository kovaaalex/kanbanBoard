import { useAppDispatch } from '@/hooks/hooks';
import Tasks from '@/components/Tasks/tasks';
import { AddTask, AddTaskButton, BoardItem } from './styled';
import type { BoardName } from '@/types/IComponents/IBoard';
import { type IBoard } from '@/types/IComponents/IBoard';
import {
  addTask,
  moveTask,
  initializeBoardTasks,
  renameTaskStatus,
} from '@/store/slices/taskSlice';
import { useEffect, useState } from 'react';
import { changeBoardColor, renameBoard } from '@/store/slices/boardsSlice';
import { BoardColumn } from '@/components/BoardColumn/boardColumn';
import { getColorStyles } from '@/utils/getColorStyles';
import type { ColorKey } from '@/types/colorTypes';
import { DEFAULT_TASK } from '@/constants/task';
import { DroppableBoard } from '@/components/DroppableBoard/droppableBoard';
interface DropItem {
  taskId: number;
  fromStatus: string;
}
const Board = ({ item }: { item: IBoard }) => {
  const { id, name, color } = item;
  const dispatch = useAppDispatch();
  const [currentBoard, setBoard] = useState(name);
  const [showSave, setShowSave] = useState(false);
  const [currentColor, setCurrentColor] = useState(color as ColorKey);
  useEffect(() => {
    dispatch(initializeBoardTasks(name));
  }, [name]);
  const handleDrop = (
    item: { taskId: number; fromStatus: BoardName },
    toStatus: BoardName
  ) => {
    if (item.fromStatus !== toStatus) {
      dispatch(
        moveTask({
          taskId: item.taskId,
          fromStatus: item.fromStatus,
          toStatus: toStatus,
        })
      );
    }
  };
  const handleBoardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoard(e.target.value);
    setShowSave(true);
  };
  const handleAddTask = () => {
    dispatch(
      addTask({
        status: name,
        task: DEFAULT_TASK,
      })
    );
  };
  const handleSave = () => {
    if (currentBoard.trim() !== name && currentBoard.trim() !== '') {
      const newName = currentBoard.trim() as BoardName;
      dispatch(renameBoard({ oldName: name, newName }));
      dispatch(renameTaskStatus({ oldStatus: name, newStatus: newName }));
      setShowSave(false);
    }
  };
  const handleColorChange = (newColor: ColorKey) => {
    setCurrentColor(newColor);
    dispatch(changeBoardColor({ boardId: id, newColor }));
  };
  return (
    <BoardItem>
      <DroppableBoard
        status={name}
        onDrop={(item: DropItem) => handleDrop(item, name)}
      >
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
