import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/templates/Layout';

import { protectedRouteLoader } from './protectedRouteLoader';

const Main = React.lazy(() => import('components/templates/Main'));
const About = React.lazy(() => import('components/templates/About'));
const Profile = React.lazy(() => import('components/templates/Profile'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>Default router v6 error boundary text</p>,
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
        loader: protectedRouteLoader,
        element: <Profile />
      }
    ]
  }
]);
