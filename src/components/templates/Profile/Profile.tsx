import { type FC } from 'react';
import { useParams } from 'react-router-dom';
import { TuserQueryParams } from 'types';

import { Typography } from '@mui/material';

export const Profile: FC = () => {
  const { userId } = useParams<TuserQueryParams>();

  return <Typography>Profile of "{userId}"</Typography>;
};

export default Profile;
