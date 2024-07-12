import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../molecules/TestWrapper';

import { Header } from './index';

describe(Header, () => {
  test('Should render Header component', () => {
    const { getByTestId, getByText } = render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    expect(getByText('Log in')).toBeVisible();
    expect(getByTestId('app-header')).toBeVisible();
  });
});
