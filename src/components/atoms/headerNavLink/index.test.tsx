import React from 'react';

import InfoIcon from '@mui/icons-material/Info';
import { render } from '@testing-library/react';

import { TestWrapper } from '../../molecules/testWrapper';

import { HeaderNavLink } from './index';

describe(HeaderNavLink, () => {
  test('Should render HeaderNavLink component', () => {
    const linkText = 'Test link';
    const dataTestId = 'link-info-icon';
    const { getByTestId, getByText } = render(
      <TestWrapper>
        <HeaderNavLink icon={<InfoIcon data-testid={dataTestId} />} link="/about" text={linkText} />
      </TestWrapper>
    );

    expect(getByText(linkText).textContent).toBe(linkText);
    expect(getByTestId(dataTestId)).toBeVisible();
  });
});
