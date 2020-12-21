import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.blue[800]
    },
    secondary: {
      main: colors.pink[600]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },
    typography: {
      fontSize: 5
    }
  },
  shadows,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto'
        }
      }
    }
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: false //' disableRipple: true' will disable ripple effect
    }
  }
});

export default theme;
