import { extends as _extends } from './_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import clsx from 'classnames';
import { ThemeProvider } from 'styled-components';
import { useToken } from 'monorepo-design-system-tokens';
import { StyledLabel } from './styled-components.js';
import { sizeMap, stateMap } from './utils.js';
import styles from './styles.module.scss.js';

const StyledComponentsProvider = ({
  children
}) => {
  const {
    color
  } = useToken();
  const theme = {
    colors: color,
    fonts: ["sans-serif", "Poppins"]
  };
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};
const Checkbox = ({
  children,
  className,
  state,
  size,
  color,
  scale,
  theme,
  input,
  ...props
}) => {
  // const { color } = useToken();
  return /*#__PURE__*/React.createElement(StyledComponentsProvider, null, /*#__PURE__*/React.createElement(StyledLabel, _extends({
    className: clsx(styles.root, sizeMap[size || "normal"], className),
    $color: color || stateMap[props.disabled ? "disabled" : state || "success"],
    $size: scale || 1,
    $themeMode: theme || "light"
  }, props), /*#__PURE__*/React.createElement("input", _extends({}, input, {
    disabled: props.disabled,
    type: "checkbox"
    // id={props.name}
  })), /*#__PURE__*/React.createElement("span", null), children));
};

export { Checkbox, StyledComponentsProvider, Checkbox as default };
