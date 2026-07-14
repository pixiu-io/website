import { useCallback } from 'react';
import useDarkMode from 'hooks/use-dark-mode';

// Toggle theme hook — returns a function that flips dark mode on/off
const useToggleTheme = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleTheme = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, setIsDarkMode]);

  return toggleTheme;
};

export default useToggleTheme;
