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
import { addTask, moveTask } from '../../store/taskSlice';
import { DroppableBoard } from '../DropableBoard/DropableBoard';
interface BoardProps {
  title: TaskStatus;
}
const Board = ({ title }: BoardProps) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks[title]);

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
    <DroppableBoard status={title} onDrop={(item) => handleDrop(item, title)}>
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
    </DroppableBoard>
  );
};
export default Board;
