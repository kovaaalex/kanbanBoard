export interface TaskItem {
  id: number;
  priority: 'Low' | 'Medium' | 'High' | 'Priority';
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
export interface BoardsState {
  defaultBoards: string[];
  customBoards: string[];
  activeBoards: string[];
}
