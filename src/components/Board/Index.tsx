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

const Board = ({ item }: { item: IBoard }) => {
  const { name, color } = item;
  const dispatch = useAppDispatch();
  const [currentBoard, setBoard] = useState(name);
  const [showSave, setShowSave] = useState(false);
  const { tasks } = useAppSelector((state) => ({
    tasks: state.tasks.tasks[name] || [],
    boards: state.boards.boards,
  }));
  useEffect(() => {
    dispatch(initializeBoardTasks(name));
  }, [name, dispatch]);

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
        <Column $statusColor={color}>
          <TaskLength $statusColor={color}>{tasks.length}</TaskLength>
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
        <Tasks title={name} tasks={tasks} />
        <AddTask>
          <AddTaskButton onClick={handleAddTask} $statusColor={color}>
            Add task...
          </AddTaskButton>
        </AddTask>
      </DroppableBoard>
    </BoardItem>
  );
};

export default Board;
