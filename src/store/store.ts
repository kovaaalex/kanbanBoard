import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import type { TasksState } from '../constants/taskTypes';

const initialState: TasksState = {
  tasks: {
    'To Do': [],
    'In Progress': [],
    Done: [],
  },
  lastId: 0,
};
const loadFromLocalStorage = (): TasksState => {
  try {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsed = JSON.parse(storedTasks) as TasksState;
      return {
        tasks: parsed.tasks || initialState.tasks,
        lastId: parsed.lastId || initialState.lastId,
      };
    }
    return initialState;
  } catch (e) {
    console.error('Failed to load tasks from localStorage', e);
    return initialState;
  }
};
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: loadFromLocalStorage(),
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
