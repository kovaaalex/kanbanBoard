import type { BoardName } from '../IComponents/IBoard';
import type { Priorities } from '../IComponents/IPriorities';
export interface TaskItem {
  id: number;
  priority: Priorities;
  title: string;
  description: string;
  deadline: string | null;
}
export type TaskWithoutId = Omit<TaskItem, 'id'>;
export interface TasksState {
  tasks: Record<BoardName, TaskItem[]>;
  lastId: number;
}
