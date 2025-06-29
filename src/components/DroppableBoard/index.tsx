import { forwardRef } from 'react';

import type { DroppableBoardProps } from '@/types/IComponents/IDroppableBoard';

import { DroppableBoardComponent } from './styled';

export const DroppableBoard = forwardRef<HTMLDivElement, DroppableBoardProps>(
  ({ children, onDrop }, ref) => {
    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
    };
    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      const data = e.dataTransfer.getData('application/json');
      if (data) {
        const item = JSON.parse(data);
        onDrop(item);
      }
    };
    return (
      <DroppableBoardComponent
        ref={ref}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {children}
      </DroppableBoardComponent>
    );
  }
);
DroppableBoard.displayName = 'DroppableBoard';
