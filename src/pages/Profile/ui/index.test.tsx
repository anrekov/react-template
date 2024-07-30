import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../../shared/ui/TestWrapper';

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
