import Task from '../Task/Index';
import {
  AddTask,
  AddTaskButton,
  BoardItem,
  Column,
  H4,
  Plus,
  TaskLength,
} from './styled';

const Board = () => {
  return (
    <BoardItem>
      <Column>
        <TaskLength>4</TaskLength>
        <H4>To Do</H4>
        <Plus />
      </Column>
      <Task />
      <AddTask>
        <AddTaskButton>Add task...</AddTaskButton>
      </AddTask>
    </BoardItem>
  );
};
export default Board;
