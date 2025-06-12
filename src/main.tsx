import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import store from './store/store.ts';
import { TasksProvider } from './components/TasksProvider/TasksProvider.tsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <TasksProvider>
          <App />
        </TasksProvider>
      </DndProvider>
    </Provider>
  </StrictMode>
);
