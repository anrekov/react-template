import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../molecules/testWrapper';

import { Profile } from './index';

describe(Profile, () => {
  test('Should render Profile component', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Profile />
      </TestWrapper>
    );

    expect(getByTestId('profile-page')).toBeVisible();
  });
});
