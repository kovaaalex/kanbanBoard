import { useState } from 'react';

import { priorityItems } from '@/constants/priorities';
import type { IPriority, Priorities } from '@/types/IComponents/IPriorities';

import { PriorityContainer, PriorityItem, PriorityList } from './styled';

const Priority = ({ priority = 'Priority', onChange }: IPriority) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPriority, setCurrentPriority] = useState<Priorities>(priority);

  const handlePriorityClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
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
              key={item}
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
