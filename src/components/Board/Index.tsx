import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Tasks from '../Tasks/Index';
import {
  AddTask,
  AddTaskButton,
  BoardItem,
  Column,
  H4,
  Plus,
  TaskLength,
} from './styled';
import type { TaskStatus } from '../../constants/taskTypes';
import { addTask } from '../../store/taskSlice';
interface BoardProps {
  title: TaskStatus;
}
const Board = ({ title }: BoardProps) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks[title]);
  const handleAddTask = () => {
    dispatch(
      addTask({
        status: title,
        task: {
          title: 'Новая задача',
          description: '',
          priority: 'Medium',
        },
      })
    );
  };
  return (
    <BoardItem>
      <Column $status={title}>
        <TaskLength>{tasks.length}</TaskLength>
        <H4>{title}</H4>
        <Plus />
      </Column>
      <Tasks title={title} />
      <AddTask>
        <AddTaskButton onClick={handleAddTask}>Add task...</AddTaskButton>
      </AddTask>
    </BoardItem>
  );
};
export default Board;
