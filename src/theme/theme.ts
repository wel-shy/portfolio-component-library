export interface ITheme {
  colors: {
    primary: string;
    info: string;
    warning: string;
    danger: string;
    dark: string;
    grey: string;
    white: string;
    text: string;
    textAccent: string;
  },
  sizes: {
    screen: {
      desktop: string,
      mobile: string,
    },
    text: {
      title: string,
      titleMobile: string,
      subtitle: string,
      subtitleMobile: string,
      paragraphLarge: string,
      paragraph: string,
    },
    columns: {
      desktop: number,
      mobile: number,
    },
  },
}

const BaseTheme = {
  sizes: {
    screen: {
      desktop: "960px",
      mobile: "680px",
    },
    text: {
      title: "3em",
      titleMobile: "3em",
      subtitle: "2em",
      subtitleMobile: "2em",
      paragraphLarge: "1.5em",
      paragraph: "1em",
    },
    columns: {
      desktop: 3,
      mobile: 2,
    },
  },
}

export const LightTheme: ITheme = {
  ...BaseTheme,
  colors: {
    primary: "#01A7C2",
    info: "#03254E",
    warning: "#F49D37",
    danger: "#FFB100",
    dark: "#011C27",
    grey: "#A3BAC3",
    white: "#F3F3F4",
    text: "#011C27",
    textAccent: "#A3BAC3"
  }
}