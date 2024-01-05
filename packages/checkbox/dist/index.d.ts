import React, { PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import { PaletteInterface } from 'monorepo-design-system-tokens';
import { Override } from 'monorepo-design-system-utils';

declare const sizeMap: {
    normal: string;
};
declare const stateMap: {
    normal: {
        main: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    success: {
        main: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};

declare const StyledComponentsProvider: ({ children, }: PropsWithChildren) => React.JSX.Element;
interface CheckboxProps extends Override<ComponentPropsWithoutRef<"label">, {
    color?: PaletteInterface[keyof PaletteInterface] | string;
    size?: keyof typeof sizeMap;
    input?: ComponentPropsWithoutRef<"input">;
    disabled?: boolean;
}> {
    theme?: "light" | "dark";
    state?: keyof typeof stateMap;
    scale?: number;
}
declare const Checkbox: React.FC<CheckboxProps>;

export { Checkbox, StyledComponentsProvider };
