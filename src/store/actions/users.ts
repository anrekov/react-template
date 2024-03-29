import { TUsersState, UsersActionsTypes } from '../types/users';

export const getUsersStart = () => ({
  type: UsersActionsTypes.GET_USERS_START
});

export const getUsersSuccess = (payload: TUsersState) => ({
  type: UsersActionsTypes.GET_USERS_SUCCESS,
  payload
});
