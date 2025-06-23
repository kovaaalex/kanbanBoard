import type { TaskItem } from '@/constants/taskTypes';
import { useAppSelector } from '@/hooks/hooks';
import Task from '@/components/Task/Index';
import { TasksList } from './styled';

interface TaskProps {
  title: 'To Do' | 'In Progress' | 'Done' | string;
  tasks: TaskItem[];
}

const Tasks = ({ title }: TaskProps) => {
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
