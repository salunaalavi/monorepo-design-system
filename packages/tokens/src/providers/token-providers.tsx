import React, {
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { palette, PaletteToken } from "../palette";

const TokenContext = createContext({
  colors: palette,
});

interface TokenProviderProps extends PropsWithChildren {
  colors: PaletteToken;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ colors, children }) => (
  <TokenContext.Provider
    value={{
      colors,
    }}
  >
    {children}
  </TokenContext.Provider>
);

export const useToken = () => {
  const context = useContext(TokenContext);

  return context;
};
