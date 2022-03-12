import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Aktif olan linki stillendirmek için NavLink kullanılır. activeStyle yerine activeClassName verilebilir. */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'activeMenu' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'activeMenu' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? 'activeMenu' : '')}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route
            index
            path="detail"
            element={
              <div> Detay sayfası için geçerli id girmeniz gerekmektedir.</div>
            }
          />
          <Route path="detail/:id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
