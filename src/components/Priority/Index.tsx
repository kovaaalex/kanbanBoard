import { PriorityContainer, PriorityItem, PriorityList } from './styled';
import { useState, useEffect } from 'react';
import type { Priorities } from '@/constants/taskTypes';
import type { IPriority } from '@/constants/taskTypes';
const priorityItems: Priorities[] = ['Low', 'Medium', 'High', 'Priority'];
const Priority = ({ priority = 'Priority', onChange }: IPriority) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPriority, setCurrentPriority] = useState<Priorities>(priority);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handlePriorityClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handleSelectPriority = (item: Priorities, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPriority(item);
    setIsOpen(false);
    onChange?.(item);
  };
  return (
    <PriorityContainer
      $priority={currentPriority}
      onClick={handlePriorityClick}
    >
      {currentPriority}
      {isOpen && (
        <PriorityList>
          {priorityItems.map((item) => (
            <PriorityItem
              $priority={item}
              onClick={(e) => handleSelectPriority(item, e)}
            >
              {item}
            </PriorityItem>
          ))}
        </PriorityList>
      )}
    </PriorityContainer>
  );
};
export default Priority;
