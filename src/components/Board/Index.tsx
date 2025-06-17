import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Tasks from '@/components/Tasks/Index';
import {
  AddTask,
  AddTaskButton,
  BoardItem,
  Column,
  H4,
  Plus,
  SaveButton,
  TaskLength,
} from './styled';
import type { TaskStatus } from '@/constants/taskTypes';
import {
  addTask,
  moveTask,
  initializeBoardTasks,
  renameTaskStatus,
} from '@/store/taskSlice';
import { DroppableBoard } from '@/components/DroppableBoard/Index';
import { useEffect, useState } from 'react';
import { renameBoard } from '@/store/boardsSlice';

interface BoardProps {
  title: TaskStatus;
}

const Board = ({ title }: BoardProps) => {
  const dispatch = useAppDispatch();
  const [currentBoard, setBoard] = useState(title);
  const [showSave, setShowSave] = useState(false);
  const { tasks } = useAppSelector((state) => ({
    tasks: state.tasks.tasks[title] || [],
    boards: state.boards.boards,
  }));
  useEffect(() => {
    dispatch(initializeBoardTasks(title));
  }, [title, dispatch]);

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
        status: title,
        task: {
          title: 'New Task',
          description: '',
          priority: 'Priority',
        },
      })
    );
  };
  const handleSave = () => {
    if (currentBoard.trim() !== title && currentBoard.trim() !== '') {
      const newName = currentBoard.trim() as TaskStatus;
      dispatch(renameBoard({ oldName: title, newName }));
      dispatch(renameTaskStatus({ oldStatus: title, newStatus: newName }));
      setShowSave(false);
    }
  };
  return (
    <BoardItem>
      <DroppableBoard status={title} onDrop={(item) => handleDrop(item, title)}>
        <Column $status={title}>
          <TaskLength $status={title}>{tasks.length}</TaskLength>
          <H4
            value={currentBoard}
            minLength={2}
            maxLength={25}
            onChange={handleBoardChange}
          />
          {showSave ? (
            <SaveButton onClick={handleSave}>Save</SaveButton>
          ) : (
            <Plus onClick={handleAddTask} />
          )}
        </Column>
        <Tasks title={title} tasks={tasks} />
        <AddTask>
          <AddTaskButton onClick={handleAddTask} $status={title}>
            Add task...
          </AddTaskButton>
        </AddTask>
      </DroppableBoard>
    </BoardItem>
  );
};

export default Board;
