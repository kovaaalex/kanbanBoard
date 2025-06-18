import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Tasks from '@/components/Tasks/Index';
import { AddTask, AddTaskButton, BoardItem } from './styled';
import type { TaskStatus } from '@/constants/taskTypes';
import { type IBoard } from '@/constants/boardTypes';
import {
  addTask,
  moveTask,
  initializeBoardTasks,
  renameTaskStatus,
} from '@/store/taskSlice';
import { DroppableBoard } from '@/components/DroppableBoard/Index';
import { useEffect, useState } from 'react';
import { renameBoard } from '@/store/boardsSlice';
import { BoardColumn } from '../BoardColumn/Index';

const Board = ({ item }: { item: IBoard }) => {
  const { id, name, color } = item;
  const dispatch = useAppDispatch();
  const [currentBoard, setBoard] = useState(name);
  const [showSave, setShowSave] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);

  const { tasks } = useAppSelector((state) => ({
    tasks: state.tasks.tasks[name] || [],
    boards: state.boards.boards,
  }));

  useEffect(() => {
    dispatch(initializeBoardTasks(name));
  }, [name, dispatch]);
  const handleColorChange = (newColor: string) => {
    setCurrentColor(newColor);
  };
  const handleDrop = (
    item: { taskId: number; fromStatus: TaskStatus },
    toStatus: TaskStatus
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
      const newName = currentBoard.trim() as TaskStatus;
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
          taskCount={tasks.length}
          onBoardChange={handleBoardChange}
          onSave={handleSave}
          onAddTask={handleAddTask}
          boardId={id}
          onChangeColor={handleColorChange}
        />
        <Tasks title={name} tasks={tasks} />
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
