import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme: ({theme})
      <br />
      <br />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
