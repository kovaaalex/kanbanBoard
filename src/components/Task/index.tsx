import { useEffect, useRef, useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';

import { useAppDispatch } from '@/hooks/hooks';

import Priority from '@/components/Priority/index';
import { deleteTask, updateTask } from '@/store/slices/taskSlice';
import type { Priorities } from '@/types/IComponents/IPriorities';
import type { TaskProps } from '@/types/IComponents/ITask';
import { isDeadlinePassed } from '@/utils/isDeadlinePassed';

import {
  DateInput,
  DateOutput,
  DeleteButton,
  SaveButton,
  TaskDescription,
  TaskSection,
  TaskTitle,
} from './styled';

const Task = ({ task, status, onPriorityChange }: TaskProps) => {
  const { id, title, description, priority, deadline } = task;
  const dispatch = useAppDispatch();
  const [currentTitle, setTitle] = useState(title);
  const [currentDescription, setDescription] = useState(description);
  const [showSave, setShowSave] = useState(false);
  const [currentPriority, setCurrentPriority] = useState(priority);
  const [currentDeadline, setCurrentDeadline] = useState<Date | null>(
    deadline ? new Date(deadline) : null
  );
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const isPassed = isDeadlinePassed(currentDeadline);
  const autoHeight = (element: HTMLTextAreaElement | null) => {
    if (element) {
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    }
  };
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData(
      'application/json',
      JSON.stringify({ taskId: id, fromStatus: status })
    );
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDelete = () => {
    dispatch(deleteTask({ status, id }));
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    autoHeight(e.target);
    setShowSave(true);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
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
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value ? new Date(e.target.value) : null;
    setCurrentDeadline(newDate);
    setShowSave(true);
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
          deadline: currentDeadline?.toISOString() || null,
        },
      })
    );
    setShowSave(false);
  };
  const getDateInputValue = () => {
    if (!currentDeadline) return '';
    return currentDeadline.toISOString().split('T')[0];
  };
  useEffect(() => {
    autoHeight(titleRef.current);
    autoHeight(descriptionRef.current);
  }, []);
  return (
    <TaskSection draggable onDragStart={handleDragStart} $isOverdue={isPassed}>
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
      {currentDeadline ? (
        <DateOutput>{currentDeadline.toLocaleDateString()}</DateOutput>
      ) : null}
      <DateInput
        type="date"
        value={getDateInputValue()}
        onChange={handleDateChange}
      />
      <DeleteButton onClick={handleDelete}>
        <FaTrashAlt />
      </DeleteButton>
      {showSave && <SaveButton onClick={handleSave}>Save</SaveButton>}
    </TaskSection>
  );
};

export default Task;
