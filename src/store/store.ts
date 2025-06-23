import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import boardsReducer from './boardsSlice';
import themeReducer from './themeSlice';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

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
