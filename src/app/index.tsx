import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import { router } from 'app/routing';
import { store } from 'app/store';
import { theme } from 'app/theme';
import { GlobalStyles } from 'shared/ui/globalStyles';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
