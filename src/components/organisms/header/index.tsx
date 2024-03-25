import { FC } from 'react';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Box, useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

import { HeaderNavLink } from 'components/atoms/headerNavLink';
import { USER_STORAGE_KEY } from 'contants/common';

import { LinksWrapper } from './styled';

export const Header: FC = () => {
  const theme = useTheme();

  // Здесь можно реализовать динамический путь и логин
  const userId = localStorage.getItem(USER_STORAGE_KEY);

  const headerItems = [
    { icon: <HomeIcon />, link: '/', text: 'Main' },
    { icon: <InfoIcon />, link: '/about', text: 'About' },
    { icon: <AccountBoxIcon />, link: `/users/${userId}`, text: 'Profile' }
  ];

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
        {headerItems.map((item) => (
          <HeaderNavLink key={`link-item-${item.link}`} {...item} />
        ))}
      </LinksWrapper>

      {userId ? (
        <Button onClick={handleLogout}>Log out</Button>
      ) : (
        <Button onClick={handleLogin}>Log in</Button>
      )}
    </Box>
  );
};
