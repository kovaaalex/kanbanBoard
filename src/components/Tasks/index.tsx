import { useAppSelector } from '@/hooks/hooks';
import Task from '@/components/Task/task';
import { TasksList } from './styled';
import type { ITasksProps } from '@/types/IComponents/ITasks';

const Tasks = ({ title }: ITasksProps) => {
  const tasks = useAppSelector((state) => state.tasks.tasks[title]);
  if (!tasks?.length) {
    return null;
  }
  return (
    <TasksList>
      {tasks.map((task) => (
        <Task key={task.id} task={task} status={title} />
      ))}
    </TasksList>
  );
};

export default Tasks;
