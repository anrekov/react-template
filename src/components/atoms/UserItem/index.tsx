import { useAppSelector } from 'hooks';
import { FC } from 'react';

import { Typography } from '@mui/material';

type TProps = {
  id: string | number;
};

export const UserItem: FC<TProps> = ({ id }) => {
  const user = useAppSelector((state) => state.users.byId[id]);

  return (
    <Typography>
      {user?.id} {user?.name}
    </Typography>
  );
};
