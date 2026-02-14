'use client';

import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',  // Blue
            light: '#42a5f5',
            dark: '#1565c0',
        },
        secondary: {
            main: '#dc004e',  // Pink
            light: '#f73378',
            dark: '#9a0036',
        },
        background: {
            default: '#f5f5f5',  // Light gray background
            paper: '#ffffff',     // White cards
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
        },
    },
});

// Dark Theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',  // Light blue
            light: '#e3f2fd',
            dark: '#42a5f5',
        },
        secondary: {
            main: '#f48fb1',  // Pink
            light: '#ffc1e3',
            dark: '#bf5f82',
        },
        background: {
            default: '#000000',  // Pure black background
            paper: '#121212',    // Dark gray cards
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',  // Remove MUI gradient
                },
            },
        },
    },
});
