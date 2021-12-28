import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

const Buttons = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <div className="absolute bottom-0 right-0">
          <ThemeIcon/>
      </div>
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode} className='theme-icon'>
      {darkTheme ? (
        <FaMoon size='28'/>
      ) : (
        <FaSun size='28'/>
      )}</span>
  );
};

export default Buttons;
