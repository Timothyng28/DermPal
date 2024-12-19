import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#0D7C66', // Primary color
      },
      secondary: {
        main: '#D7C3F1', // Secondary color
      },
      background: {
        default: '#f5f5f5', // Background color
      },
      gradient: {
        main: 'linear-gradient(45deg, #A8DADC 30%, #D4A5F5 90%)', // Gradient color
      },
      text: {
        primary: '#000000', // Main text color
        secondary: '#757575', // Secondary text color
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
  
  export default theme;