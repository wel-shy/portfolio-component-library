import { createGlobalStyle } from "styled-components";
import { ITheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
  body {
    color: ${({theme}) => (theme as ITheme).colors.text};
    font-family: ${({theme}) => (theme as ITheme).font.serif};
    margin: 0;
    padding: 0;
  }
`;