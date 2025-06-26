import type { Priorities } from '@/types/IComponents/IPriorities';
import type { BoardName } from '@/types/IComponents/IBoard';
import type { TaskItem } from '@/types/IStore/ITasksState';

export interface TaskProps {
  task: TaskItem;
  status: BoardName;
  onPriorityChange?: (priority: Priorities) => void;
}
