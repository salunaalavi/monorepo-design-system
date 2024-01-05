import React from 'react';
import { ThemedStyledInterface } from 'styled-components';
import { PaletteToken } from 'monorepo-design-system-tokens';

type TTheme = {
    colors: PaletteToken;
    fonts: string[];
};
declare const withStyledComponents: <ComponentProps extends {}>(Component: React.FC<ComponentProps>) => (props: ComponentProps) => React.JSX.Element;
declare const styled: ThemedStyledInterface<TTheme>;

export { styled, withStyledComponents };
