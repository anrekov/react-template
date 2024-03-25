import { About, Main, Profile } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/templates/layout/Layout';

import { protecedRouteLoader } from './protecedRouteLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Oops! There was an error.</div>,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/users/:userId',
        loader: protecedRouteLoader,
        element: <Profile />
      }
    ]
  }
]);
