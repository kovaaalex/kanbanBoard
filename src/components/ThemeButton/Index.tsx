import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toogleTheme } from '@/store/themeSlice';
import { ThemeBtn } from './styled';

export const ThemeButton = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  return (
    <ThemeBtn
      onClick={() => dispatch(toogleTheme())}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </ThemeBtn>
  );
};
