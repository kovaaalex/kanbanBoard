import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Tasks from '@/components/Tasks/Index';
import {
  AddTask,
  AddTaskButton,
  BoardItem,
  Column,
  H4,
  Plus,
  TaskLength,
} from './styled';
import type { TaskStatus } from '@/constants/taskTypes';
import { addTask, moveTask, initializeBoardTasks } from '@/store/taskSlice';
import { DroppableBoard } from '@/components/DroppableBoard/Index';
import { useEffect } from 'react';

interface BoardProps {
  title: TaskStatus;
}

const Board = ({ title }: BoardProps) => {
  const dispatch = useAppDispatch();

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
  const handleBoardChange = () => {};
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

  return (
    <BoardItem>
      <DroppableBoard status={title} onDrop={(item) => handleDrop(item, title)}>
        <Column $status={title}>
          <TaskLength $status={title}>{tasks.length}</TaskLength>
          <H4 value={title} maxLength={50} onChange={handleBoardChange} />
          <Plus onClick={handleAddTask} />
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
