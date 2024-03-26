import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  height: '60px'
}));

export const LinksWrapper = styled(Box)(({ theme }) => ({
  'a': {
    'text-decoration': 'none',
    'color': theme.palette.link.main
  },
  'a.active': {
    color: theme.palette.link.active
  }
}));
