import React, {
  ComponentType
} from "react";
import {
  ThemeProvider,
} from "styled-components";
import { useToken } from 'monorepo-design-system-tokens';

interface ThemeProviderProps {}

export const withStyledComponents = <ComponentProps extends ThemeProviderProps>(Component: ComponentType<ComponentProps>) => {
  const { colors } = useToken();

  const ComponentWithTheme = (props: Omit<ComponentProps, keyof ThemeProviderProps>) => {
    const theme = {
      colors: colors,
      fonts: ["sans-serif", "Poppins"],
    };

    return (
      <ThemeProvider theme={theme}>
        <Component {...props as ComponentProps} />
      </ThemeProvider>
    )
  }

  return ComponentWithTheme
};