import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App.jsx';
import { MoodProvider } from './context/MoodContext.jsx';
import { appTheme } from './theme.js';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <MoodProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MoodProvider>
    </ThemeProvider>
  </React.StrictMode>
);
