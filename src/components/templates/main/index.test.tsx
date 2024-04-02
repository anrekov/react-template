import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../molecules/testWrapper';

import { Main } from './index';

describe(Main, () => {
  test('Should render Main component', () => {
    const { getByTestId, getByText } = render(
      <TestWrapper>
        <Main />
      </TestWrapper>
    );

    expect(getByText('Main')).toBeVisible();
    expect(getByTestId('main-page')).toBeVisible();
  });
});
