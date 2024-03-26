import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/templates/layout/Layout';

import { protecedRouteLoader } from './protecedRouteLoader';

const Main = React.lazy(() => import('components/templates/Main/Main'));
const About = React.lazy(() => import('components/templates/About/About'));
const Profile = React.lazy(() => import('components/templates/Profile/Profile'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Oops! There was an error.</div>,
    children: [
      {
        index: true,
        element: (
          <React.Suspense // Custom fallback
            fallback={<h2 style={{ padding: '20px', backgroundColor: 'blue' }}>Loading...</h2>}
          >
            <Main />
          </React.Suspense>
        )
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
