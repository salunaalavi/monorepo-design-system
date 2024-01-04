import React, { PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import designTokens from 'monorepo-design-system-tokens';
import { Override } from 'monorepo-design-system-utils';
import sizeMap, { stateMap } from './utils.js';

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

export { Checkbox, StyledComponentsProvider, Checkbox as default };
