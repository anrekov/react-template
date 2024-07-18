import { Dispatch } from 'redux';
import { ThunkActionApp } from 'store';

import { getUsers } from 'services/users';
import { getUsersStart, getUsersSuccess } from 'store/actions/users';

export const loadUsers =
  (): ThunkActionApp =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getUsersStart());

      const users = await getUsers();

      dispatch(getUsersSuccess({ users }));
    } catch (error) {
      console.error(error);
    }
  };
