import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Error404 from './components/Error404';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
function App() {
  return (
    // Versiyon 5 için kullanımı aşağıdaki şekildedir. Versiyon 6'da bu yapı değişmiştir!
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* Aktif olan linki stillendirmek için NavLink kullanılır. activeStyle yerine activeClassName verilebilir. */}
              <NavLink
                activeStyle={{ backgroundColor: '#000', color: '#fff' }}
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: '#000', color: '#fff' }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: '#000', color: '#fff' }}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
