import React, {
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { palette, PaletteInterface } from "../palette";

const TokenContext = createContext({
  color: palette,
});

interface TokenProviderProps extends PropsWithChildren {
  color: PaletteInterface;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ color, children }) => (
  <TokenContext.Provider
    value={{
      color,
    }}
  >
    {children}
  </TokenContext.Provider>
);

export const useToken = () => {
  const context = useContext(TokenContext);

  return context;
};
