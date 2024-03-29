export enum UsersActionsTypes {
  GET_USERS_START = 'GET_USERS_START',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
}

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type TgetUsersStart = {
  type: UsersActionsTypes.GET_USERS_START;
};

type TgetUsersSuccess = {
  type: UsersActionsTypes.GET_USERS_SUCCESS;
  payload: {
    users: TUser[];
  };
};

export type UsersActions = TgetUsersStart | TgetUsersSuccess;

export type TUsersState = {
  users: TUser[];
};
