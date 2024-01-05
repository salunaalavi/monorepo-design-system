import React, {
  FC,
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

export const withStyledComponents = <ComponentProps extends {}>(Component: FC<ComponentProps>) => {
  const { colors } = useToken();

  const ComponentWithTheme = (props: ComponentProps) => {
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
