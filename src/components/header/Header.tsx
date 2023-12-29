import { USER_STORAGE_KEY } from 'consts';
import { NavLink } from 'react-router-dom';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Box, Typography, useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

import { LinksWrapper } from './styled';

export const Header = () => {
  const theme = useTheme();

  // Здесь можно реализовать динамический путь и логин
  const userId = localStorage.getItem(USER_STORAGE_KEY);

  const handleLogin = () => {
    localStorage.setItem(USER_STORAGE_KEY, 'user');
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1.5}
      sx={{ backgroundColor: theme.palette.link.background ?? blue[100] }}
    >
      <LinksWrapper display="flex" gap={3}>
        <NavLink to="/">
          <Box display="flex" alignItems="center" gap={1}>
            <HomeIcon />
            <Typography>Main</Typography>
          </Box>
        </NavLink>

        <NavLink to="/about">
          <Box display="flex" alignItems="center" gap={1}>
            <InfoIcon />
            <Typography>About</Typography>
          </Box>
        </NavLink>

        <NavLink to={`/users/${userId}`}>
          <Box display="flex" alignItems="center" gap={1}>
            <AccountBoxIcon />
            <Typography>Profile</Typography>
          </Box>
        </NavLink>
      </LinksWrapper>

      {userId ? (
        <Button onClick={handleLogout}>Log out</Button>
      ) : (
        <Button onClick={handleLogin}>Log in</Button>
      )}
    </Box>
  );
};
