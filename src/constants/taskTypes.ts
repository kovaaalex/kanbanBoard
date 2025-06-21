export type Priorities = 'Low' | 'Medium' | 'High' | 'Priority';
export interface IPriority {
  priority?: Priorities;
  onChange?: (priority: Priorities) => void;
}
export interface TaskProps {
  task: TaskItem;
  status: TaskStatus;
  onPriorityChange?: (priority: Priorities) => void;
}
export interface TaskItem {
  id: number;
  priority: Priorities;
  title: string;
  description: string;
}
export type TaskStatus = 'To Do' | 'In Progress' | 'Done' | string;
export interface TasksState {
  tasks: Record<TaskStatus, TaskItem[]>;
  lastId: number;
}
export const initialTasksState: TasksState = {
  tasks: {
    'To Do': [],
    'In Progress': [],
    Done: [],
  },
  lastId: 0,
};
