import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/organisms/header';

export const Layout: FC = () => (
  <>
    <Header />

    <div style={{ padding: '16px' }}>
      <Outlet />
    </div>
  </>
);
