import { UsersActions, UsersActionsTypes, TUsersState } from '../types/users';

const initialState: TUsersState = {
  byId: {},
  allIds: []
};

export const usersReducer = (state = initialState, action: UsersActions): TUsersState => {
  switch (action.type) {
    case UsersActionsTypes.GET_USERS_START:
      return {
        ...state,
        byId: {}
      };
    case UsersActionsTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        byId: action.payload.users.reduce((acc, user) => {
          acc[user.id] = user;

          return acc;
        }, {}),
        allIds: action.payload.users.map(({ id }) => id.toString())
      };

    default:
      return state;
  }
};
