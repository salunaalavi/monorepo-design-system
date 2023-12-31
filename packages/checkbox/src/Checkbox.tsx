import React, {
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from "react";
import clsx from "classnames";
import {
  withStyledComponents,
} from "monorepo-design-system-providers";
import {
  PaletteToken,
} from "monorepo-design-system-tokens";  
import {
  Override,
} from "monorepo-design-system-utils";
import {
  StyledLabel,
} from "./styled-components";
import {
  sizeMap,
  stateMap,
} from "./utils";
import styles from "./styles.module.scss";

interface CheckboxProps extends Override<ComponentPropsWithoutRef<"label">, {
  color?: PaletteToken[keyof PaletteToken] | string;
  size?: keyof typeof sizeMap;
  input?: ComponentPropsWithoutRef<"input">,
  disabled?: boolean,
}> {
  theme?: "light" | "dark";
  state?: keyof typeof stateMap;
  scale?: number;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({
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

  return (
    <StyledLabel
      className={clsx(styles.root, sizeMap[size || "normal"], className)}
      $color={
        color || stateMap[props.disabled ? "disabled" : state || "success"]
      }
      $size={scale || 1}
      $themeMode={theme || "light"}
      {...props}
    >
      <input
        {...input}
        disabled={props.disabled}
        type="checkbox"
      />
      <span />
      {
        children
      }
    </StyledLabel>
  )
};

export const Checkbox = withStyledComponents(CheckboxComponent)

export default Checkbox;
