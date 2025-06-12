import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import store from './store/store.ts';
import { TasksProvider } from './components/TasksProvider/TasksProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TasksProvider>
        <App />
      </TasksProvider>
    </Provider>
  </StrictMode>
);
