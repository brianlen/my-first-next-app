'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from './ThemeProvider';

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <Tooltip title={mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
            <IconButton
                onClick={toggleTheme}
                color="inherit"
                aria-label="toggle theme"
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    backgroundColor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'background.paper',
                        boxShadow: 4,
                    },
                }}
            >
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
        </Tooltip>
    );
}
