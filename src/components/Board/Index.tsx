import { useAppDispatch } from '@/hooks/hooks';
import Tasks from '@/components/Tasks/Index';
import { AddTask, AddTaskButton, BoardItem } from './styled';
import type { BoardName } from '@/types/IComponents/IBoard';
import { type IBoard } from '@/types/IComponents/IBoard';
import {
  addTask,
  moveTask,
  initializeBoardTasks,
  renameTaskStatus,
} from '@/store/taskSlice';
import { DroppableBoard } from '@/components/DroppableBoard/Index';
import { useEffect, useState } from 'react';
import { changeBoardColor, renameBoard } from '@/store/boardsSlice';
import { BoardColumn } from '../BoardColumn/Index';

const Board = ({ item }: { item: IBoard }) => {
  const { id, name, color } = item;
  const dispatch = useAppDispatch();
  const [currentBoard, setBoard] = useState(name);
  const [showSave, setShowSave] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);

  useEffect(() => {
    dispatch(initializeBoardTasks(name));
  }, [name]);
  const handleColorChange = (newColor: string) => {
    setCurrentColor(newColor);
    dispatch(changeBoardColor({ boardId: id, newColor }));
  };
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
        task: {
          title: 'New Task',
          description: '',
          priority: 'Priority',
        },
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

  return (
    <BoardItem>
      <DroppableBoard status={name} onDrop={(item) => handleDrop(item, name)}>
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
          <AddTaskButton onClick={handleAddTask} $statusColor={currentColor}>
            Add task...
          </AddTaskButton>
        </AddTask>
      </DroppableBoard>
    </BoardItem>
  );
};

export default Board;
