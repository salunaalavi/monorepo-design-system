import React, { PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import designTokens from 'monorepo-design-system-tokens';
import { Override } from 'monorepo-design-system-utils';

declare const sizeMap: {
    normal: string;
};
declare const stateMap: {
    normal: {
        light?: string;
        main: string;
        dark?: string;
    };
    success: {
        light?: string;
        main: string;
        dark?: string;
    };
};

declare const StyledComponentsProvider: ({ children, }: PropsWithChildren) => React.JSX.Element;
interface CheckboxProps extends Override<ComponentPropsWithoutRef<"input">, {
    color?: typeof designTokens.palette;
    size?: keyof typeof sizeMap;
}> {
    theme?: "light" | "dark";
    state?: keyof typeof stateMap;
    scale?: number;
}
declare const Checkbox: React.FC<CheckboxProps>;

export { Checkbox, StyledComponentsProvider };
