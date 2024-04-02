import { protecedRouteLoader } from './protecedRouteLoader';

describe(protecedRouteLoader, () => {
  test('Should set user and get null', () => {
    localStorage.setItem('user', 'test');
    const result = protecedRouteLoader();

    expect(result).toBe(null);
  });
});
