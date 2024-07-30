import { TUsersPayload, UsersActionsTypes } from '../types/users';

export const getUsersStart = () => ({
  type: UsersActionsTypes.GET_USERS_START
});

export const getUsersSuccess = (payload: TUsersPayload) => ({
  type: UsersActionsTypes.GET_USERS_SUCCESS,
  payload
});
