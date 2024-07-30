import React from 'react';

import { act, render } from '@testing-library/react';

import { TestWrapper } from '../../../shared/ui/TestWrapper';

import { ShowTime } from './index';

describe(ShowTime, () => {
  test('Should render ShowTime component', () => {
    const { getByText, queryByText } = render(
      <TestWrapper>
        <ShowTime />
      </TestWrapper>
    );

    const button = getByText('Show time');
    const text = queryByText('Now:');

    expect(button).toBeVisible();
    expect(text).not.toBeInTheDocument();

    act(() => {
      button.click();
    });
    expect(getByText('Now:')).toBeVisible();
  });
});
