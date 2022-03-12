import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      <h1>User Details</h1>
      {loading && <div>Loading..</div>}
      <p>
        <strong>Name: </strong> {user.name}
      </p>
      <p>
        <strong>Email: </strong> {user.email}
      </p>
      <p>
        <strong>Phone: </strong> {user.phone}
      </p>
      <p>
        <strong>Website: </strong> {user.website}
      </p>

      <Link to={`/users/detail/${parseInt(id) - 1}`}>Prev User</Link>
      <br></br>
      <Link to={`/users/detail/${parseInt(id) + 1}`}>Next User</Link>

      {Number(id) > 10 && <Navigate to="/users" />}
    </div>
  );
}

export default User;
