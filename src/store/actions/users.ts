import { IUsersState, UsersActionsTypes } from '../types/users';

export const getUsersStart = () => ({
  type: UsersActionsTypes.GET_USERS_START
});

export const getUsersSuccess = (payload: IUsersState) => ({
  type: UsersActionsTypes.GET_USERS_SUCCESS,
  payload
});
