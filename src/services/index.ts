import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_URL } from 'contants/config';

// Должна быть singleton, поэтому экспортируем только инстанс класса
class Api {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      withCredentials: true,
      baseURL
    });

    this._initializeResponseInterceptor();
  }

  protected _handleError = (error: AxiosError) => Promise.reject(error); // TODO refresh token + access token

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(null, this._handleError);
  };

  request = <Data = unknown, RespData = unknown>({
    url = '',
    method = 'GET',
    params = {}
  }: AxiosRequestConfig<Data>): Promise<RespData> =>
    this.instance({ url, method, params }).then(({ data }) => data);
}

export const api = new Api(API_URL);
