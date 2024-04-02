import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Skeleton } from '@mui/material';

import { Header } from 'components/organisms/header';

export const Layout: FC = () => (
  <>
    <Header />

    <div data-testid="layout" style={{ padding: '16px' }}>
      <React.Suspense // Common fallback
        fallback={<Skeleton height="calc(100vh - 92px)" variant="rounded" />}
      >
        <Outlet />
      </React.Suspense>
    </div>
  </>
);
