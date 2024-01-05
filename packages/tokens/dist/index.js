import React, { useContext, createContext } from 'react';

const palette = {
  primary: {
    main: "#0d47A1",
    100: "#DCF1FC",
    200: "#BAE0F9",
    300: "#93C6EC",
    400: "#73A9DB",
    500: "#4882C3",
    600: "#3465A7",
    700: "#244B8C",
    800: "#163471",
    900: "#0D245D"
  },
  secondary: {
    main: "#311b92",
    100: "#F3FBD2",
    200: "#E5F8A7",
    300: "#CCEC79",
    400: "#B0D954",
    500: "#8AC124",
    600: "#70A51A",
    700: "#578A12",
    800: "#1D7911",
    900: "#0F640A"
  },
  text: {
    primary: "#263238",
    secondary: "#263238"
  },
  common: {
    white: "#FFFFFF",
    black: "#000000"
  }
};

const TokenContext = /*#__PURE__*/createContext({
  colors: palette
});
const TokenProvider = ({
  colors,
  children
}) => /*#__PURE__*/React.createElement(TokenContext.Provider, {
  value: {
    colors
  }
}, children);
const useToken = () => {
  const context = useContext(TokenContext);
  return context;
};

export { TokenProvider, palette, useToken };
