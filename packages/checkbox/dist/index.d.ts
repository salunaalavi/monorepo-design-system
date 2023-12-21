import React, { ComponentPropsWithoutRef } from 'react';
import designTokens from 'monorepo-design-system-tokens';
import { Override } from '@/utils';

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

declare const StyledComponentsProvider: ({ children, }: React.PropsWithChildren) => React.JSX.Element;
interface CheckboxProps extends Override<ComponentPropsWithoutRef<"input">, {
    color?: typeof designTokens.palette;
    size?: keyof typeof sizeMap;
}> {
    theme?: "light" | "dark";
    name: string;
    state?: keyof typeof stateMap;
    scale?: number;
}
declare const Checkbox: React.FC<CheckboxProps>;

export { Checkbox, StyledComponentsProvider };
