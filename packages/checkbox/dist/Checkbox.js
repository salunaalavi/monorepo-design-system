import { extends as _extends } from './_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import clsx from 'classnames';
import { withStyledComponents } from 'monorepo-design-system-providers';
import { StyledLabel } from './styled-components.js';
import { sizeMap, stateMap } from './utils.js';
import styles from './styles.module.scss.js';

const CheckboxComponent = ({
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
  // const { color } = useTheme();

  return /*#__PURE__*/React.createElement(StyledLabel, _extends({
    className: clsx(styles.root, sizeMap[size || "normal"], className),
    $color: color || stateMap[props.disabled ? "disabled" : state || "success"],
    $size: scale || 1,
    $themeMode: theme || "light"
  }, props), /*#__PURE__*/React.createElement("input", _extends({}, input, {
    disabled: props.disabled,
    type: "checkbox"
  })), /*#__PURE__*/React.createElement("span", null), children);
};
const Checkbox = withStyledComponents(CheckboxComponent);

export { Checkbox, Checkbox as default };
