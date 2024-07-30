import { api } from 'shared/api/instance';

import { TUser } from './model';

export const getUsers = () => api.request<never, TUser[]>({ url: '/users' });
