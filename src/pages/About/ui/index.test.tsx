import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../../../shared/ui/TestWrapper';

import { About } from './index';

describe(About, () => {
  test('Should render About component', () => {
    const { getByTestId, getByText } = render(
      <TestWrapper>
        <About />
      </TestWrapper>
    );

    expect(getByText('About')).toBeVisible();
    expect(getByTestId('about-page')).toBeVisible();
  });
});
