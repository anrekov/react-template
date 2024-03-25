import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

type Props = {
  icon: React.ReactNode;
  link: string;
  text: string;
};

export const HeaderNavLink: FC<Props> = ({ icon, link, text }) => (
  <NavLink to={link}>
    <Box display="flex" alignItems="center" gap={1}>
      {icon}
      <Typography>{text}</Typography>
    </Box>
  </NavLink>
);
