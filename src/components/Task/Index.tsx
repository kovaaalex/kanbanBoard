import { TaskSection, TaskTitle, TaskDescription } from './styled';
import Priority from '../Priority/Index';
import { useEffect, useRef, useState } from 'react';
interface TaskProps {
  taskId?: number;
  priority?: 'Low' | 'Medium' | 'High' | 'Priority';
  title?: string;
  description?: string;
  onPriorityChange?: (priority: 'Low' | 'Medium' | 'High' | 'Priority') => void;
}

const Task = ({
  taskId = 1,
  priority = 'Priority',
  title = 'Healthcare app wireframe flow 👩‍⚕️',
  description = 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
  onPriorityChange,
}: TaskProps) => {
  const [currentTitle, setTitle] = useState(title);
  const [currentDescription, setDescription] = useState(description);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const autoHeight = (element: HTMLTextAreaElement | null) => {
    if (element) {
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    }
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    autoHeight(e.target);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    autoHeight(e.target);
  };
  useEffect(() => {
    autoHeight(titleRef.current);
    autoHeight(descriptionRef.current);
  }, []);
  return (
    <TaskSection>
      <Priority priority={priority} onChange={onPriorityChange} />
      <TaskTitle
        ref={titleRef}
        id={`${taskId}-title`}
        value={currentTitle}
        maxLength={60}
        onChange={handleTitleChange}
        rows={1}
      />
      <TaskDescription
        ref={descriptionRef}
        id={`${taskId}-description`}
        value={currentDescription}
        maxLength={300}
        onChange={handleDescriptionChange}
        rows={1}
      />
    </TaskSection>
  );
};

export default Task;
