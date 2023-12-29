import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { userQueryParams } from 'types';

export const Profile: FC = () => {
  const { userId } = useParams<userQueryParams>();

  return <div>Profile of "{userId}"</div>;
};
