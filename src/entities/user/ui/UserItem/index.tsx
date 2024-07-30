import { FC } from 'react';

import { useAppSelector } from 'shared/hooks';
import { UserInfo } from 'widgets/UserInfo';

type TProps = {
  id: string | number;
};

export const UserItem: FC<TProps> = ({ id }) => {
  const user = useAppSelector((state) => state.users.byId[id]);

  return <UserInfo user={user} />;
};
