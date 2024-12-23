import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#5A9CA4', // Primary color
      },
      secondary: {
        main: '#8F57B8', // Secondary color
      },
      background: {
        default: '#f5f5f5', // Background color
      },
      text: {
        primary: '#000000', // Main text color
        secondary: '#757575', // Secondary text color
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    gradients: {
      primary: 'linear-gradient(45deg, #A8DADC 30%, #D4A5F5 90%)', // Gradient color
    },
  });
  
  export default theme;