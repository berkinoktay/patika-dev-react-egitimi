import '../App.css';
import Button from './Button';
import Header from './Header';
import User from './User';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <User />
    </div>
  );
}

export default Container;
