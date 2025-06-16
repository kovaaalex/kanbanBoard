import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import boardsReducer from './boardsSlice';
import type { TasksState } from '../constants/taskTypes';
import type { BoardsState } from '../constants/boardTypes';
import { initialTasksState } from '../constants/taskTypes';

const defaultBoardsState: BoardsState = {
  defaultBoards: ['To Do', 'In Progress', 'Done'],
  customBoards: [],
  activeBoards: ['To Do', 'In Progress', 'Done'],
};

const loadState = () => {
  const tasksStr = localStorage.getItem('tasks');
  const boardsStr = localStorage.getItem('boards');
  const tasks: TasksState = tasksStr ? JSON.parse(tasksStr) : initialTasksState;
  const boards: BoardsState = boardsStr
    ? JSON.parse(boardsStr)
    : defaultBoardsState;
  return {
    tasks: {
      tasks: tasks.tasks || initialTasksState.tasks,
      lastId: tasks.lastId ?? 0,
    },
    boards: {
      defaultBoards: boards.defaultBoards ?? defaultBoardsState.defaultBoards,
      customBoards: boards.customBoards ?? [],
      activeBoards: boards.activeBoards ?? [
        ...defaultBoardsState.defaultBoards,
        ...(boards.customBoards ?? []),
      ],
    },
  };
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    boards: boardsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
  localStorage.setItem('boards', JSON.stringify(state.boards));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
