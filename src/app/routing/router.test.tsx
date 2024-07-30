import { router } from './router';

describe('router', () => {
  test('Should get basename', () => {
    expect(router.basename).toBe('/');
  });
});
