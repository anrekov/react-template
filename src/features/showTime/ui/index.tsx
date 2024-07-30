import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

const intl = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeStyle: 'medium' });

export const ShowTime = () => {
  const [time, setTime] = useState(0);

  const handleShowTime = () => {
    setTime(Date.now());
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleShowTime}>
        Show time
      </Button>

      {!!time && (
        <Typography>
          <b>Now:</b> {intl.format(time)}
        </Typography>
      )}
    </Box>
  );
};
