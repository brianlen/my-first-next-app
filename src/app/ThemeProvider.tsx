'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './themes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleTheme: () => { },
});

// Custom hook to use theme context
export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [mode, setMode] = useState<ThemeMode>('light');
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeMode;
        if (savedTheme) {
            setMode(savedTheme);
        }
        setMounted(true);
    }, []);

    // Save theme to localStorage when it changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', mode);
        }
    }, [mode, mounted]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // Prevent flash of wrong theme
    // if (!mounted) {
    //   return null;
    // }

    const theme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
}
