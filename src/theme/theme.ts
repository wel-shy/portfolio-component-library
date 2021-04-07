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
    background: string;
  };
  sizes: {
    screen: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    text: {
      title: string;
      titleMobile: string;
      subtitle: string;
      subtitleMobile: string;
      paragraphLarge: string;
      paragraph: string;
    };
    columns: {
      desktop: number;
      mobile: number;
    };
  };
  font: {
    serif: string;
    sans: string;
  };
}

const BaseTheme = {
  font: {
    serif: "'Noto Serif', serif",
    sans: "'Noto Sans', sans-serif",
  },
  sizes: {
    screen: {
      s: 640,
      m: 768,
      l: 1024,
      xl: 1200,
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
};

export const LightTheme: ITheme = {
  ...BaseTheme,
  colors: {
    primary: "#01A7C2",
    info: "#16697A",
    warning: "#F49D37",
    danger: "#BF211E",
    dark: "#011C27",
    grey: "#A3BAC3",
    white: "#F3F3F4",
    text: "#011C27",
    textAccent: "#1C6E8C",
    background: "#F3F3F4",
  },
};
