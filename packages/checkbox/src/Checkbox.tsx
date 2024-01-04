import React, {
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from "react";
import clsx from "classnames";
import {
  ThemeProvider,
} from "styled-components";
import designTokens from "monorepo-design-system-tokens";  
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

const theme = {
  colors: designTokens.palette,
  fonts: ["sans-serif", "Poppins"],
};

export const StyledComponentsProvider = ({
  children,
}: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

interface CheckboxProps extends Override<ComponentPropsWithoutRef<"input">, {
  color?: typeof designTokens.palette;
  size?: keyof typeof sizeMap;
}> {
  theme?: "light" | "dark";
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
  <StyledComponentsProvider>
    <StyledLabel
      className={clsx(styles.root, sizeMap[size || "normal"], className)}
      $color={
        color || stateMap[props.disabled ? "disabled" : state || "success"]
      }
      $size={scale || 1}
      $themeMode={theme || "light"}
    >
      <input
        {...props}
        type="checkbox"
        // id={props.name}
      />
      <span />
      {
        children
      }
    </StyledLabel>
  </StyledComponentsProvider>
);

export default Checkbox;
