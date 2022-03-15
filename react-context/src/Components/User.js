import { useState } from 'react';
import { useTheme } from '../Context/UserContext';
function User() {
  const { user, setUser } = useTheme();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        name: 'Berkin',
        bio: 'lorem ipsum doler',
      });
      setLoading(false);
    }, 1500);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      )}
      <br />

      <code>{!user ? 'Giriş yapılmadı!' : JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default User;
