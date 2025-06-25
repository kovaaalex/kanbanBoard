import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { toogleTheme } from '@/store/slices/themeSlice';
import { ThemeBtn } from './styled';

export const ThemeButton = () => {
  const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(toogleTheme());
  }
  return (
    <ThemeBtn
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </ThemeBtn>
  );
};
