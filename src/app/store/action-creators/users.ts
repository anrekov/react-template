import { Dispatch } from 'redux';

import { getUsers } from 'shared/api/users';

import { getUsersStart, getUsersSuccess } from '../actions/users';

import { ThunkActionApp } from '../';

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
