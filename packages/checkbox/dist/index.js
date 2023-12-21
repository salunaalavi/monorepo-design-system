import React from 'react';
import clsx from 'classnames';
import styled from 'styled-components';
import designTokens from 'monorepo-design-system-tokens';

const StyledLabel = styled.label`
  padding-left: calc(2rem * ${props => props.$size});
  height: calc(1.5rem * ${props => props.$size});
  line-height: calc((2.75rem / 2) * ${props => props.$size});
  font-size: calc((2.5rem / 2) * ${props => props.$size});
  color: ${props => {
  if (props.$themeMode === "light") {
    return props.theme.colors.neutral[900];
  }
  if (typeof props.$color === "string") {
    return props.$color;
  }
  return props.theme.colors.white;
}};

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  & span {
    height: calc(1.5rem * ${props => props.$size});
    width: calc(1.5rem * ${props => props.$size});
    border-radius: calc(0.3rem * ${props => props.$size});
  }

  & input:not(:checked) ~ span {
    border-width: calc(0.2rem * ${props => props.$size});
    border-color: ${props => typeof props.$color === "string" ? props.$color : props.$color[500]};
  }

  &:hover input:not(:checked):not(:disabled) ~ span {
    border-width: calc(0.2rem * ${props => props.$size});
    border-color: ${props => typeof props.$color === "string" ? props.$color : props.$color[600]};
  }

  &:hover input:checked:not(:disabled) ~ span {
    background-color: ${props => typeof props.$color === "string" ? props.$color : props.$color[600]};
  }

  & input:checked ~ span {
    background-color: ${props => typeof props.$color === "string" ? props.$color : props.$color[500]};
  }

  & span::after {
    left: calc(0.5rem * ${props => props.$size});
    top: calc(0.2rem * ${props => props.$size});
    width: calc(0.5rem * ${props => props.$size});
    height: calc(0.875rem * ${props => props.$size});
    border-bottom-width: calc(0.2rem * ${props => props.$size});
    border-right-width: calc(0.2rem * ${props => props.$size});
  }
`;

// import styles from "./styles.module.scss";
const sizeMap = {
  // small: styles.root__small,
  normal: ""
  // large: styles.root__large,
};
const stateMap = {
  normal: designTokens.palette.primary,
  success: designTokens.palette.secondary
};

const Checkbox = ({
  children,
  className,
  state,
  size,
  color,
  scale,
  theme,
  ...props
}) => ( /*#__PURE__*/React.createElement(StyledLabel, {
  className: clsx(sizeMap[size || "normal"], className),
  "$color": color || stateMap[props.disabled ? "disabled" : state || "success"],
  "$size": scale || 1,
  "$themeMode": theme || "light"
}, /*#__PURE__*/React.createElement("input", {
  ...props,
  type: "checkbox",
  id: props.name
}), /*#__PURE__*/React.createElement("span", null), children));

export { Checkbox };
