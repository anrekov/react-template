import type { FC } from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ShowTime } from 'features/showTime';

export const Main: FC = () => (
  <Box data-testid="main-page" display="flex" flexDirection="column" gap={4}>
    <Typography>Main</Typography>

    <ShowTime />
  </Box>
);
