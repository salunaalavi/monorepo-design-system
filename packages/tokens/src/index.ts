import palette, { PaletteInterface } from './palette';

export interface DesignTokensInterface {
    palette: PaletteInterface;
}

const designTokens: DesignTokensInterface = {
    palette,
};

export default designTokens;