import { useEffect, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { TuserQueryParams } from 'types';

import { Box, Typography } from '@mui/material';

import { useActions, useAppSelector } from 'hooks/redux';

export const Profile: FC = () => {
  const { userId } = useParams<TuserQueryParams>();
  const { loadUsers } = useActions();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Box data-testid="profile-page">
      <Typography variant="h4">Profile of "{userId}"</Typography>

      {users.map((user) => (
        <Typography key={user.id}>
          {user.id} {user.name}
        </Typography>
      ))}
    </Box>
  );
};

export default Profile;
