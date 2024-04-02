import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../molecules/testWrapper';

import { Layout } from './index';

describe(Layout, () => {
  test('Should render Layout component', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Layout />
      </TestWrapper>
    );

    expect(getByTestId('layout')).toBeVisible();
  });
});
