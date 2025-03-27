"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // customizable primary color
    },
    secondary: {
      main: '#dc004e', // customizable secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}