import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { theme } from 'theme';

import { ThemeProvider } from '@mui/material/styles';

type Props = {
  children: React.ReactNode;
};

export const TestWrapper: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ThemeProvider>
);
