import { Dispatch } from 'redux';

import { getUsers } from 'services/users';
import { getUsersStart, getUsersSuccess } from 'store/actions/users';

export const loadUsers =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getUsersStart());

      const { data } = await getUsers();

      dispatch(getUsersSuccess({ users: data }));
    } catch (error) {
      console.error(error);
    }
  };
