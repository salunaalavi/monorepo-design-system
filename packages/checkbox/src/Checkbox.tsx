import React, {
  ComponentPropsWithoutRef,
} from "react";
import clsx from "classnames";
import designTokens from "monorepo-design-system-tokens";  
import {
  Override,
} from "@/utils";
// import styles from "./styles.module.scss";
import {
  StyledLabel,
} from "./styled-components";
import {
  sizeMap,
  stateMap,
} from "./utils";

interface CheckboxProps extends Override<ComponentPropsWithoutRef<"input">, {
  color?: typeof designTokens.palette;
  size?: keyof typeof sizeMap;
}> {
  theme?: "light" | "dark";
  name: string;
  state?: keyof typeof stateMap;
  scale?: number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  className,
  state,
  size,
  color,
  scale,
  theme,
  ...props
}) => (
  <StyledLabel
    className={clsx(sizeMap[size || "normal"], className)}
    $color={
      color || stateMap[props.disabled ? "disabled" : state || "success"]
    }
    $size={scale || 1}
    $themeMode={theme || "light"}
  >
    <input
      {...props}
      type="checkbox"
      id={props.name}
    />
    <span />
    {
      children
    }
  </StyledLabel>
);

export default Checkbox;
