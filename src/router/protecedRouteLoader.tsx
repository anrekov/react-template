import { redirect } from 'react-router-dom';

import { USER_STORAGE_KEY } from 'contants/common';

export const protecedRouteLoader = () => {
  // Здесь можно реализовать проверку на аутентификацию
  const user = localStorage.getItem(USER_STORAGE_KEY);

  if (!user) {
    return redirect('/');
  }

  return null;
};
