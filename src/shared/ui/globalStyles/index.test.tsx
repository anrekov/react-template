import React from 'react';

import { render } from '@testing-library/react';

import { TestWrapper } from '../TestWrapper';

import { GlobalStyles } from './index';

describe(GlobalStyles, () => {
  test('Should render GlobalStyles component', () => {
    const { container } = render(
      <TestWrapper>
        <GlobalStyles />
      </TestWrapper>
    );

    expect(container).toBeInTheDocument();
  });
});
