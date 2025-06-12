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
interface BoardProps {
  title: 'To Do' | 'In Progress' | 'Done';
  taskCount: number;
}
const Board = ({ title, taskCount }: BoardProps) => {
  return (
    <BoardItem>
      <Column $status={title}>
        <TaskLength>{taskCount}</TaskLength>
        <H4>{title}</H4>
        <Plus />
      </Column>
      <Tasks title={title} />
      <AddTask>
        <AddTaskButton>Add task...</AddTaskButton>
      </AddTask>
    </BoardItem>
  );
};
export default Board;
