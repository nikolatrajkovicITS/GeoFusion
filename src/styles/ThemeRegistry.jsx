import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@styles/theme';

function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRegistry;
