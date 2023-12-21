interface PaletteInterface {
    primary: {
        light?: string;
        main: string;
        dark?: string;
    };
    secondary: {
        light?: string;
        main: string;
        dark?: string;
    };
    common: {
        white: string;
        black: string;
    };
    text: {
        primary: string;
        secondary?: string;
    };
}

interface DesignTokensInterface {
    palette: PaletteInterface;
}
declare const designTokens: DesignTokensInterface;

export { type DesignTokensInterface, designTokens as default };
