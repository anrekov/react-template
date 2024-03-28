import { UsersActions, UsersActionsTypes, IUsersState } from '../types/users';

const initialState: IUsersState = {
  users: []
};

export const usersReducer = (state = initialState, action: UsersActions): IUsersState => {
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
