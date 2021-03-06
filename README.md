# Portfolio Component Library
A component library for consitent portfolio websites.

## Getting Started
### Installation

```bash
yarn add @wel-shy/porfolio-component-library
```

### Fonts
For fonts to work, please add this to your head tag:

```html
<head>
...
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link 
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&display=swap" 
    rel="stylesheet"
  />
</head>
```

### Setup
To begin using the components you must first wrap your project in the
`ThemeProvider` component, it requires a `theme`, that extends the
`ITheme` interface. For example:

```jsx
import {LightTheme, ThemeProvider} from "@wel-shy/portfolio-component-library";

export default () => (
  <ThemeProvider theme={LightTheme}>
    <h1>Hello World!</h1>
  </ThemeProvider>
);
```