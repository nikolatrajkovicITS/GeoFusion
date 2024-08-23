import { createTheme } from '@mui/material/styles';

const COLORS = {
  primary: '#57167E',
  secondary: '#3E4970',
  textPrimary: '#253057',
  textSecondary: '#717CA3',
  backgroundDefault: '#FFFFFF',
  backgroundPaper: '#EBF0F8',
  backgroundLightPurple: '#F1DAFF',
  backgroundContainer: '#3E4970',
  actionHover: '#D898FF',
  infoMain: '#D898FF',
  divider: '#EBF0F8',
};

const TYPOGRAPHY = {
  fontFamily: 'PP Neue Montreal, Arial, sans-serif',
  bodyS: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    textAlign: 'center',
  },
  bodyXS: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    textAlign: 'left',
  },
  robotoBold: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '16.41px',
  },
  headingXXS: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '32px',
  },
  bodySSemibold: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'left',
  },
  bodyXSSemibold: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    textAlign: 'center',
  },
  bodyL: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '32px',
    textAlign: 'left',
  },
};

const COMPONENT_OVERRIDES = {
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: COLORS.backgroundPaper,
        color: COLORS.textPrimary,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: COLORS.secondary,
        '&.Mui-selected': {
          color: COLORS.primary,
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        color: COLORS.textPrimary,
        '&::placeholder': {
          color: COLORS.textSecondary,
        },
      },
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
    background: {
      default: COLORS.backgroundDefault,
      paper: COLORS.backgroundPaper,
      lightPurple: COLORS.backgroundLightPurple,
      container: COLORS.backgroundContainer,
    },
    action: {
      active: COLORS.primary,
      hover: COLORS.actionHover,
    },
    info: {
      main: COLORS.infoMain,
    },
    divider: COLORS.divider,
  },
  typography: {
    fontFamily: TYPOGRAPHY.fontFamily,
    ...TYPOGRAPHY,
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: COMPONENT_OVERRIDES,
});

export default theme;
