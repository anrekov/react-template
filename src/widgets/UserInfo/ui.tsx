import { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { FullName } from 'features/fullName';

import { TUserInfoProps } from './model';

export const UserInfo: FC<TUserInfoProps> = ({ user }) => (
  <Box>
    <FullName name={user?.name ?? ''} lastName={String(user?.id ?? '')} />

    <Typography>{user?.email}</Typography>
  </Box>
);
