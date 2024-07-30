import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={(theme) => ({
      html: {
        height: '100%'
      },
      body: {
        margin: 0
      }
    })}
  />
);
