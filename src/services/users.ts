import { api } from 'services';

import { TUser } from 'store/types/users';

export const getUsers = () => api.request<never, TUser[]>({ url: '/users' });
