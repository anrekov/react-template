import React from 'react';

import { render, screen } from '@testing-library/react';

import { Main } from './Main';

test('renders Main page', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Main/i);
  expect(linkElement).toBeInTheDocument();
});
