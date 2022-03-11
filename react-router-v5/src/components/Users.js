import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading..</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
