import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import User from './User';
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading..</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`detail/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Users;
