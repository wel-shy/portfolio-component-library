import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../theme/theme';

const ThemeWrapper = ({ children}) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;