import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import { theme } from 'theme';

import { ThemeProvider } from '@mui/material/styles';

import { GlobalStyles } from 'components/atoms/globalStyles';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
