import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'shared/ui/Layout';

import { protectedRouteLoader } from './protectedRouteLoader';

const Main = React.lazy(() => import('pages/Main'));
const About = React.lazy(() => import('pages/About'));
const Profile = React.lazy(() => import('pages/Profile'));

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
