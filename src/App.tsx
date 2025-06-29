import ErrorBoundary from '@/components/ErrorBoundary';
import { FallbackComponent } from '@/components/FallbackComponent';
import Header from '@/components/Header/index';
import KanbanBoard from '@/components/KanbanBoard/index';
import { ThemeButton } from '@/components/ThemeButton/index';

import { useEffect } from 'react';

import { useAppSelector } from '@/hooks/hooks';

import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';

import './App.css';

const App = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <ErrorBoundary fallback={<FallbackComponent />}>
      <Header />
      <KanbanBoard />
      <ThemeButton />
    </ErrorBoundary>
  );
};

export default App;
