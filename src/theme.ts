import { blue, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    link: {
      background: blue[100],
      active: blue[600],
      main: blueGrey.A700
    }
  }
});
