import { useDrop } from 'react-dnd';
import type { TaskStatus } from '../../constants/taskTypes';
import { forwardRef } from 'react';
import { DroppableBoardComponent } from './styled';

interface DroppableBoardProps {
  status: TaskStatus;
  children: React.ReactNode;
  onDrop: (item: { taskId: number; fromStatus: TaskStatus }) => void;
}
export const DroppableBoard = forwardRef<HTMLDivElement, DroppableBoardProps>(
  ({ status, children, onDrop }, ref) => {
    const [, drop] = useDrop(() => ({
      accept: 'TASK',
      drop: (item: { taskId: number; fromStatus: TaskStatus }) => {
        onDrop(item);
        return { toStatus: status };
      },
    }));
    const setRef = (node: HTMLDivElement | null) => {
      drop(node);
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    return (
      <DroppableBoardComponent ref={setRef}>{children}</DroppableBoardComponent>
    );
  }
);
DroppableBoard.displayName = 'DroppableBoard';
