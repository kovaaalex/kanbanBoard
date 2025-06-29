import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { BoardName } from '@/types/IComponents/IBoard';
import type { TaskItem, TasksState } from '@/types/IStore/ITasksState';

export const initialTasksState: TasksState = {
  tasks: {
    'To Do': [],
    'In Progress': [],
    Done: [],
  },
  lastId: 0,
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    setTasks: (state, action: PayloadAction<TasksState>) => {
      state.tasks = action.payload.tasks;
      state.lastId = action.payload.lastId;
    },
    addTask: (
      state,
      action: PayloadAction<{
        status: BoardName;
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
    },
    deleteTask: (
      state,
      action: PayloadAction<{
        status: BoardName;
        id: number;
      }>
    ) => {
      const { status, id } = action.payload;
      state.tasks[status] = state.tasks[status].filter(
        (task) => task.id !== id
      );
    },
    moveTask: (
      state,
      action: PayloadAction<{
        taskId: number;
        fromStatus: BoardName;
        toStatus: BoardName;
      }>
    ) => {
      const { taskId, fromStatus, toStatus } = action.payload;
      const taskIndex = state.tasks[fromStatus].findIndex(
        (item) => item.id === taskId
      );
      if (taskIndex !== -1) {
        const [task] = state.tasks[fromStatus].splice(taskIndex, 1);
        state.tasks[toStatus].push(task);
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{
        status: BoardName;
        id: number;
        updates: Partial<Omit<TaskItem, 'id' | 'status'>>;
      }>
    ) => {
      const { status, id, updates } = action.payload;
      const taskIndex = state.tasks[status].findIndex((item) => item.id === id);
      if (taskIndex !== -1) {
        state.tasks[status][taskIndex] = {
          ...state.tasks[status][taskIndex],
          ...updates,
        };
      }
    },
    initializeBoardTasks: (state, action: PayloadAction<string>) => {
      const boardName = action.payload;
      if (!state.tasks[boardName]) {
        state.tasks[boardName] = [];
      }
    },
    renameTaskStatus: (
      state,
      action: PayloadAction<{ oldStatus: BoardName; newStatus: BoardName }>
    ) => {
      const { oldStatus, newStatus } = action.payload;
      if (state.tasks[oldStatus]) {
        state.tasks[newStatus] = state.tasks[oldStatus];
        delete state.tasks[oldStatus];
      }
    },
    dropTaskStatus: (state, action: PayloadAction<string>) => {
      const statusToRemove = action.payload;
      if (state.tasks[statusToRemove]) {
        delete state.tasks[statusToRemove];
      }
    },
    changeDeadline: (
      state,
      action: PayloadAction<{
        status: BoardName;
        id: number;
        newDeadline: string;
      }>
    ) => {
      const { status, id, newDeadline } = action.payload;
      const taskIndex = state.tasks[status].findIndex(
        (task) => task.id === task.id
      );
      if (taskIndex !== -1) {
        state.tasks[status][id].deadline = newDeadline;
      }
    },
  },
});
export const {
  setTasks,
  addTask,
  deleteTask,
  moveTask,
  updateTask,
  initializeBoardTasks,
  renameTaskStatus,
  dropTaskStatus,
  changeDeadline,
} = tasksSlice.actions;
export default tasksSlice.reducer;
