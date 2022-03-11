import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    // Versiyon 5 için kullanımı aşağıdaki şekildedir. Versiyon 6'da bu yapı değişmiştir!
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
