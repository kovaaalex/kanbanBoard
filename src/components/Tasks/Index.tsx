import { useAppSelector } from '../../store/hooks';
import Task from '../Task/Index';
import { TasksList } from './styled';

interface TaskProps {
  title: 'To Do' | 'In Progress' | 'Done';
}

const Tasks = ({ title }: TaskProps) => {
  const tasks = useAppSelector((state) => state.tasks.tasks[title]);
  if (!tasks?.length) {
    return null;
  }
  return (
    <TasksList>
      {tasks.map((task) => (
        <Task
          key={task.id}
          taskId={task.id}
          priority={task.priority}
          title={task.title}
          description={task.description}
        />
      ))}
    </TasksList>
  );
};

export default Tasks;
