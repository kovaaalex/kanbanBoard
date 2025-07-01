import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@/hooks/hooks';

import ErrorBoundary from '@/components/ErrorBoundary';
import { FallbackComponent } from '@/components/FallbackComponent';
import Header from '@/components/Header';
import KanbanBoard from '@/components/KanbanBoard';
import { ThemeButton } from '@/components/ThemeButton';
import { themes } from '@/constants/theme';

import GlobalStyle from './styled';

const App = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <ErrorBoundary fallback={<FallbackComponent />}>
        <Header />
        <KanbanBoard />
        <ThemeButton />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
