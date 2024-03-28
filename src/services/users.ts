import { AxiosResponse } from 'axios';
import { $api } from 'services';

import { TUser } from 'store/types/users';

export const getUsers = (): Promise<AxiosResponse<TUser[]>> => $api.get('/users');
