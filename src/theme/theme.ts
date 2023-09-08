'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
