import React from 'react';
import baseStyled, { ThemeProvider } from 'styled-components';
import { useToken } from 'monorepo-design-system-tokens';

const withStyledComponents = Component => {
  const {
    colors
  } = useToken();
  const ComponentWithTheme = props => {
    const theme = {
      colors: colors,
      fonts: ["sans-serif", "Poppins"]
    };
    return /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Component, props));
  };
  return ComponentWithTheme;
};
const styled = baseStyled;

export { styled, withStyledComponents };
