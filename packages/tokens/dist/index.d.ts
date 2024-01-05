import React, { PropsWithChildren } from 'react';

declare const palette: {
    primary: {
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
    secondary: {
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
    text: {
        primary: string;
        secondary: string;
    };
    common: {
        white: string;
        black: string;
    };
};
type PaletteInterface = (typeof palette);

interface TokenProviderProps extends PropsWithChildren {
    color: PaletteInterface;
}
declare const TokenProvider: React.FC<TokenProviderProps>;
declare const useToken: () => {
    color: {
        primary: {
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
        secondary: {
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
        text: {
            primary: string;
            secondary: string;
        };
        common: {
            white: string;
            black: string;
        };
    };
};

export { type PaletteInterface, TokenProvider, useToken };
