import { protectedRouteLoader } from './protectedRouteLoader';

describe(protectedRouteLoader, () => {
  test('Should set user and get null', () => {
    localStorage.setItem('user', 'test');
    const result = protectedRouteLoader();

    expect(result).toBe(null);
  });
});
