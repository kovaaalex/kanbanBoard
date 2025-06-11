import { TaskSection, TaskTitle, TaskDescription } from './styled';
import Priority from '../Priority/Index';

interface TaskProps {
  priority?: 'Low' | 'Medium' | 'High' | 'Priority';
  title?: string;
  description?: string;
  onPriorityChange?: (priority: 'Low' | 'Medium' | 'High' | 'Priority') => void;
}

const Task = ({
  priority = 'Medium',
  title = 'Healthcare app wireframe flow 👩‍⚕️',
  description = 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
  onPriorityChange,
}: TaskProps) => {
  return (
    <TaskSection>
      <Priority priority={priority} onChange={onPriorityChange} />
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>{description}</TaskDescription>
    </TaskSection>
  );
};

export default Task;
