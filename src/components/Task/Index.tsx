import {
  TaskSection,
  TaskTitle,
  TaskDescription,
  DeleteButton,
  SaveButton,
} from './styled';
import Priority from '@/components/Priority/Index';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '@/store/taskSlice';
import { FaTrashAlt } from 'react-icons/fa';
import type { Priorities, TaskProps } from '@/constants/taskTypes';
const Task = ({ task, status, onPriorityChange }: TaskProps) => {
  const { id, title, description, priority } = task;
  const dispatch = useDispatch();
  const [currentTitle, setTitle] = useState(title);
  const [currentDescription, setDescription] = useState(description);
  const [showSave, setShowSave] = useState(false);
  const [currentPriority, setCurrentPriority] = useState(priority);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'application/json',
      JSON.stringify({ taskId: id, fromStatus: status })
    );
    e.dataTransfer.effectAllowed = 'move';
  };
  const autoHeight = (element: HTMLTextAreaElement | null) => {
    if (element) {
      element.style.height = `${element.scrollHeight}px`;
    }
  };
  const handleDelete = () => {
    dispatch(deleteTask({ status, id }));
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    autoHeight(e.target);
    setShowSave(true);
  };
  const handlePriorityChange = (newPriority: Priorities) => {
    setCurrentPriority(newPriority);
    setShowSave(true);
    if (onPriorityChange) {
      onPriorityChange(newPriority);
    }
  };

  const handleSave = () => {
    dispatch(
      updateTask({
        status,
        id,
        updates: {
          title: currentTitle,
          description: currentDescription,
          priority: currentPriority,
        },
      })
    );
    setShowSave(false);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    autoHeight(e.target);
    setShowSave(true);
  };
  useEffect(() => {
    autoHeight(titleRef.current);
    autoHeight(descriptionRef.current);
  }, []);
  return (
    <TaskSection draggable onDragStart={handleDragStart}>
      <Priority priority={priority} onChange={handlePriorityChange} />
      <TaskTitle
        ref={titleRef}
        id={`${id}-title`}
        value={currentTitle}
        maxLength={60}
        onChange={handleTitleChange}
        rows={1}
      />
      <TaskDescription
        ref={descriptionRef}
        id={`${id}-description`}
        value={currentDescription}
        maxLength={300}
        onChange={handleDescriptionChange}
        rows={1}
      />
      <DeleteButton onClick={handleDelete}>
        <FaTrashAlt />
      </DeleteButton>
      {showSave && <SaveButton onClick={handleSave}>Save</SaveButton>}
    </TaskSection>
  );
};

export default Task;
