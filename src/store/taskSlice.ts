import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TaskItem, TaskStatus, TasksState } from '../constants/taskTypes';
const initialState: TasksState = {
  tasks: {
    'To Do': [],
    'In Progress': [],
    Done: [],
  },
  lastId: 0,
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TasksState>) => {
      state.tasks = action.payload.tasks;
      state.lastId = action.payload.lastId;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    addTask: (
      state,
      action: PayloadAction<{
        status: TaskStatus;
        task: Omit<TaskItem, 'id'>;
      }>
    ) => {
      const { status, task } = action.payload;
      const newId = state.lastId + 1;
      const newTask = {
        ...task,
        id: newId,
      };
      state.tasks[status].push(newTask);
      state.lastId = newId;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (
      state,
      action: PayloadAction<{
        status: TaskStatus;
        id: number;
      }>
    ) => {
      const { status, id } = action.payload;
      state.tasks[status] = state.tasks[status].filter(
        (task) => task.id !== id
      );
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});
export const { setTasks, addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
