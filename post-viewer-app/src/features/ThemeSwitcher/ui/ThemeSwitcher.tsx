import { useTheme } from '../../../shared/lib/theme/useTheme';
import Button from '../../../shared/ui/Button/Button';

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <Button onClick={changeTheme} variant="secondary" size="sm">
      {theme === 'light' ? '🌙' : '☀️' } 
    </Button>
  );
};