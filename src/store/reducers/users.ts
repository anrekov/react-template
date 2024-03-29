import { UsersActions, UsersActionsTypes, TUsersState } from '../types/users';

const initialState: TUsersState = {
  users: []
};

export const usersReducer = (state = initialState, action: UsersActions): TUsersState => {
  switch (action.type) {
    case UsersActionsTypes.GET_USERS_START:
      return {
        ...state,
        users: []
      };
    case UsersActionsTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users
      };

    default:
      return state;
  }
};
