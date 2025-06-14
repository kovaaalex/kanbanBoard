import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import boardsReducer from './boardsSlice';
import type { TasksState, BoardsState } from '../constants/taskTypes';

const defaultTasksState: TasksState = {
  tasks: {
    'To Do': [],
    'In Progress': [],
    Done: [],
  },
  lastId: 0,
};

const defaultBoardsState: BoardsState = {
  defaultBoards: ['To Do', 'In Progress', 'Done'],
  customBoards: [],
  activeBoards: ['To Do', 'In Progress', 'Done'],
};

const loadState = () => {
  try {
    const tasksStr = localStorage.getItem('tasks');
    const boardsStr = localStorage.getItem('boards');
    const tasks: TasksState = tasksStr
      ? JSON.parse(tasksStr)
      : defaultTasksState;
    const boards: BoardsState = boardsStr
      ? JSON.parse(boardsStr)
      : defaultBoardsState;
    return {
      tasks: {
        tasks: tasks.tasks || defaultTasksState.tasks,
        lastId: tasks.lastId || 0,
      },
      boards: {
        defaultBoards: boards.defaultBoards || defaultBoardsState.defaultBoards,
        customBoards: boards.customBoards || [],
        activeBoards: boards.activeBoards || [
          ...defaultBoardsState.defaultBoards,
          ...(boards.customBoards || []),
        ],
      },
    };
  } catch (e) {
    console.error('Load state error:', e);
    return {
      tasks: defaultTasksState,
      boards: defaultBoardsState,
    };
  }
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
  console.log('State saved:', state); // Для отладки
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
