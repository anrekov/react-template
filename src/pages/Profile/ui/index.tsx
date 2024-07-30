import { useEffect, type FC } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { UserItem } from 'entities/user';
import { useActions, useAppSelector } from 'shared/hooks';

import { TuserQueryParams } from '../model';

export const Profile: FC = () => {
  const { userId } = useParams<TuserQueryParams>();
  const { loadUsers } = useActions();
  const userIds = useAppSelector((state) => state.users.allIds);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Box data-testid="profile-page">
      <Typography variant="h4">Profile of "{userId}"</Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {userIds.map((id) => (
          <UserItem key={id} id={id} />
        ))}
      </Box>
    </Box>
  );
};
