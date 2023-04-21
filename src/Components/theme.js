import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#00FF00',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
      fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0em',
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      fontFamily: 'Open Sans, sans-serif',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      fontFamily: 'Open Sans, sans-serif',
    },
  },
});

export default theme;
