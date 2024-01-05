import React, {
  ComponentPropsWithoutRef,
  PropsWithChildren,
} from "react";
import clsx from "classnames";
import {
  ThemeProvider,
} from "styled-components";
import {
  palette,
  PaletteInterface,
  useToken,
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

const theme = {
  colors: palette,
  fonts: ["sans-serif", "Poppins"],
};

export const StyledComponentsProvider = ({
  children,
}: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

interface CheckboxProps extends Override<ComponentPropsWithoutRef<"label">, {
  color?: PaletteInterface[keyof PaletteInterface] | string;
  size?: keyof typeof sizeMap;
  input?: ComponentPropsWithoutRef<"input">,
  disabled?: boolean,
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
  color: colorProps,
  scale,
  theme,
  input,
  ...props
}) => {
  const { color } = useToken();
  return (
    <StyledComponentsProvider>
      <StyledLabel
        className={clsx(styles.root, sizeMap[size || "normal"], className)}
        $color={
          color || colorProps || stateMap[props.disabled ? "disabled" : state || "success"]
        }
        $size={scale || 1}
        $themeMode={theme || "light"}
        {...props}
      >
        <input
          {...input}
          disabled={props.disabled}
          type="checkbox"
          // id={props.name}
        />
        <span />
        {
          children
        }
      </StyledLabel>
    </StyledComponentsProvider>
  )
};

export default Checkbox;
