import React, { type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Skeleton } from '@mui/material';

import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { Header } from 'shared/ui/Header';

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <div data-testid="layout" style={{ padding: '16px' }}>
        <React.Suspense // Common fallback
          fallback={<Skeleton height="calc(100vh - 92px)" variant="rounded" />}
        >
          <ErrorBoundary key={location.pathname}>
            <Outlet />
          </ErrorBoundary>
        </React.Suspense>
      </div>
    </>
  );
};
