import type { BoardName } from '@/types/IComponents/IBoard';
import { forwardRef } from 'react';
import { DroppableBoardComponent } from './styled';

interface DroppableBoardProps {
  status: BoardName;
  children: React.ReactNode;
  onDrop: (item: { taskId: number; fromStatus: BoardName }) => void;
}
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
