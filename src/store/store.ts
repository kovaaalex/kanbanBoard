import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import boardsReducer from './slices/boardsSlice';
import tasksReducer from './slices/taskSlice';
import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
  boards: boardsReducer,
  tasks: tasksReducer,
  theme: themeReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['boards', 'tasks', 'theme'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
