import {
  TaskSection,
  TaskTitle,
  TaskDescription,
  DeleteButton,
} from './styled';
import Priority from '../Priority/Index';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/taskSlice';
import type { TaskStatus } from '../../constants/taskTypes';
interface TaskProps {
  taskId?: number;
  status: TaskStatus;
  priority?: 'Low' | 'Medium' | 'High' | 'Priority';
  title?: string;
  description?: string;
  onPriorityChange?: (priority: 'Low' | 'Medium' | 'High' | 'Priority') => void;
}

const Task = ({
  taskId = 1,
  status = 'To Do',
  priority = 'Priority',
  title = 'Healthcare app wireframe flow 👩‍⚕️',
  description = 'Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.',
  onPriorityChange,
}: TaskProps) => {
  const dispatch = useDispatch();
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
  const handleDelete = () => {
    dispatch(deleteTask({ status, id: taskId }));
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
      <DeleteButton onClick={handleDelete}>delete</DeleteButton>
    </TaskSection>
  );
};

export default Task;
