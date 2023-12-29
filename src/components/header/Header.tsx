import { USER_STORAGE_KEY } from 'consts';
import { NavLink } from 'react-router-dom';

const paintActiveLink = ({ isActive }) => ({ color: isActive ? 'orange' : 'black' });

export const Header = () => {
  // Здесь можно реализовать динамический путь и логин
  const userId = localStorage.getItem(USER_STORAGE_KEY);

  const handleLogin = () => {
    localStorage.setItem(USER_STORAGE_KEY, 'user');
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px',
        backgroundColor: 'lightcyan'
      }}
    >
      <div style={{ display: 'flex', gap: '12px' }}>
        <NavLink to="/" style={paintActiveLink}>
          Main
        </NavLink>

        <NavLink to="/about" style={paintActiveLink}>
          About
        </NavLink>

        <NavLink to={`/users/${userId}`} style={paintActiveLink}>
          Profile
        </NavLink>
      </div>

      {userId ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
};
