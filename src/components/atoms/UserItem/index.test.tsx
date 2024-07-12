import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../molecules/TestWrapper';

import { UserItem } from './index';

describe(UserItem, () => {
  test('Should render UserItem component', () => {
    const preloadedState = {
      users: {
        byId: {
          test: {
            id: 'test',
            name: 'Testik'
          }
        },
        allIds: ['test']
      }
    };

    const { getByText } = render(
      <TestWrapper preloadedState={preloadedState}>
        <UserItem id="test" />
      </TestWrapper>
    );

    expect(getByText(/Testik/)).toBeVisible();
  });
});
