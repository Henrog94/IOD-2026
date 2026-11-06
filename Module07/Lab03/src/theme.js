import { createTheme } from '@mui/material/styles';

// Exercise 5 extension: one shared theme keeps the app's appearance consistent.
export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#214D4C', contrastText: '#ffffff' },
    secondary: { main: '#3CA899', contrastText: '#ffffff' },
    background: { default: '#f4f7f7', paper: '#ffffff' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 750 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 }
  }
});
