import { FC } from 'react';

import { Typography } from '@mui/material';

import { TFullNameProps } from './model';

export const FullName: FC<TFullNameProps> = ({ name, lastName }) => (
  <Typography>
    {lastName} {name}
  </Typography>
);
