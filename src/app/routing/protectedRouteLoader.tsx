import { USER_STORAGE_KEY } from 'consts';
import { redirect } from 'react-router-dom';

export const protectedRouteLoader = () => {
  // Здесь можно реализовать проверку на аутентификацию
  const user = localStorage.getItem(USER_STORAGE_KEY);

  if (!user) {
    return redirect('/');
  }

  return null;
};
