export interface TaskItem {
  id: number;
  priority: 'Low' | 'Medium' | 'High' | 'Priority';
  title: string;
  description: string;
}
export type TaskStatus = 'To Do' | 'In Progress' | 'Done';
export interface TasksState {
  tasks: Record<TaskStatus, TaskItem[]>;
  lastId: number;
}
