import React from 'react';

interface ThemeProviderProps {
}
declare const withStyledComponents: <ComponentProps extends ThemeProviderProps>(Component: React.ComponentType<ComponentProps>) => (props: Omit<ComponentProps, never>) => React.JSX.Element;

export { withStyledComponents };
