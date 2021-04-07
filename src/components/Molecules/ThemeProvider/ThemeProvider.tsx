import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../../../theme/GlobalStyle";
import { ITheme, LightTheme } from "../../../theme/theme";

interface ThemeProviderProps {
  theme?: ITheme;
  children: any;
}

export const ThemeProvider = ({
  theme = LightTheme,
  children,
}: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
