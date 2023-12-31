import {
  ComponentPropsWithoutRef,
} from "react";
import {
  PaletteToken,
} from "monorepo-design-system-tokens";  
import {
  styled,
} from "monorepo-design-system-providers";

interface LabelProps extends ComponentPropsWithoutRef <"span"> {
  $size: number;
  $themeMode: string;
  $color: PaletteToken[keyof PaletteToken] | string;
}

export const StyledLabel = styled.label<LabelProps>`
  padding-left: calc(2rem * ${(props) => props.$size});
  height: calc(1.5rem * ${(props) => props.$size});
  line-height: calc((2.75rem / 2) * ${(props) => props.$size});
  font-size: calc((2.5rem / 2) * ${(props) => props.$size});
  color: ${(props) => {
    if (props.$themeMode === "light") {
      return props.theme.colors.common.black;
    } if (typeof props.$color === "string") {
      return props.$color;
    } if (props.$color) {
      return props.$color[500]
    }
    return props.theme.colors.common.white;
  }};

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  & span {
    height: calc(1.5rem * ${(props) => props.$size});
    width: calc(1.5rem * ${(props) => props.$size});
    border-radius: calc(0.3rem * ${(props) => props.$size});
  }

  & input:not(:checked) ~ span {
    border-width: calc(0.2rem * ${(props) => props.$size});
    border-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color[500])};
  }

  &:hover input:not(:checked):not(:disabled) ~ span {
    border-width: calc(0.2rem * ${(props) => props.$size});
    border-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color[600])};
  }

  &:hover input:checked:not(:disabled) ~ span {
    background-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color[600])};
  }

  & input:checked ~ span {
    background-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color[500])};
  }

  & span::after {
    left: calc(0.5rem * ${(props) => props.$size});
    top: calc(0.2rem * ${(props) => props.$size});
    width: calc(0.5rem * ${(props) => props.$size});
    height: calc(0.875rem * ${(props) => props.$size});
    border-bottom-width: calc(0.2rem * ${(props) => props.$size});
    border-right-width: calc(0.2rem * ${(props) => props.$size});
  }
`;

export default StyledLabel;
