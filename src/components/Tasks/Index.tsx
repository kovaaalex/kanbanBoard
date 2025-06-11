import Task from '../Task/Index';
import { TasksList } from './styled';
interface TaskItem {
  id: number;
  priority: 'Low' | 'Medium' | 'High' | 'Priority';
  title: string;
  description: string;
}
interface TaskProps {
  title: 'To Do' | 'In Progress' | 'Done';
}
const tasksData: Record<'To Do' | 'In Progress' | 'Done', TaskItem[]> = {
  'To Do': [
    {
      id: 1,
      priority: 'Low',
      title: 'Try to write SOLID',
      description: 'Fix the unnecessary code',
    },
  ],
  'In Progress': [
    {
      id: 2,
      priority: 'Medium',
      title: 'Refactor components',
      description: 'Make components more reusable',
    },
  ],
  Done: [
    {
      id: 3,
      priority: 'High',
      title: 'Implement drag and drop',
      description: 'Add DnD functionality',
    },
  ],
};

const Tasks = ({ title }: TaskProps) => {
  const currentTasks = tasksData[title];
  return (
    <TasksList>
      {currentTasks.map((task) => (
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
