import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import './App.css';
import KanbanBoard from '@/components/KanbanBoard/Index';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useAppSelector } from '@/hooks/hooks';
import { useEffect } from 'react';
import { ThemeButton } from '@/components/ThemeButton/Index';
import Header from '@/components/Header/Index';

const App = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <ErrorBoundary
      fallback={<p>Что-то пошло не так, перезапустите страницу</p>}
    >
      <Header />
      <KanbanBoard />
      <ThemeButton />
    </ErrorBoundary>
  );
};

export default App;
