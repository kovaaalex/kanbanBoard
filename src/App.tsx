import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import './App.css';
import Header from './components/Header/Index';
import KanbanBoard from './components/KanbanBoard/Index';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary
      fallback={<p>Что-то пошло не так, перезапустите страницу</p>}
    >
      <Header />
      <KanbanBoard />
    </ErrorBoundary>
  );
}

export default App;
