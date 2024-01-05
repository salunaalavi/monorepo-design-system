import React, {
  ComponentType,
} from "react";
import baseStyled, {
  ThemeProvider,
  ThemedStyledInterface,
} from "styled-components";
import { PaletteToken, useToken } from 'monorepo-design-system-tokens';

type TTheme = {
  colors: PaletteToken[keyof PaletteToken],
  fonts: string[],
}

interface ThemeProviderProps {
  theme: TTheme,
}

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

export const styled = baseStyled as ThemedStyledInterface<TTheme>;
