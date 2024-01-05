import React from 'react';
import { ThemedStyledInterface } from 'styled-components';
import { PaletteToken } from 'monorepo-design-system-tokens';

type TTheme = {
    colors: PaletteToken[keyof PaletteToken];
    fonts: string[];
};
interface ThemeProviderProps {
    theme: TTheme;
}
declare const withStyledComponents: <ComponentProps extends ThemeProviderProps>(Component: React.ComponentType<ComponentProps>) => (props: Omit<ComponentProps, "theme">) => React.JSX.Element;
declare const styled: ThemedStyledInterface<TTheme>;

export { styled, withStyledComponents };
