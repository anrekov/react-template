import { TUser } from 'shared/api/users/model';

export enum UsersActionsTypes {
  GET_USERS_START = 'GET_USERS_START',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
}

type TgetUsersStart = {
  type: UsersActionsTypes.GET_USERS_START;
};

export type TUsersPayload = {
  users: TUser[];
};

type TgetUsersSuccess = {
  type: UsersActionsTypes.GET_USERS_SUCCESS;
  payload: TUsersPayload;
};

export type UsersActions = TgetUsersStart | TgetUsersSuccess;

export type TUsersState = {
  byId: Record<string, TUser>;
  allIds: string[];
};
