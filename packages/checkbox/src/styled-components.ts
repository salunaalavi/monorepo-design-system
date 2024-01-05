import {
  ComponentPropsWithoutRef,
} from "react";
import {
  palette,
  PaletteInterface,
} from "monorepo-design-system-tokens";  
import styled from "styled-components";

interface LabelProps extends ComponentPropsWithoutRef<"span"> {
  $size: number;
  $themeMode: string;
  $color: PaletteInterface[keyof PaletteInterface] | string;
}

export const StyledLabel = styled.label<LabelProps>`
  padding-left: calc(2rem * ${(props) => props.$size});
  height: calc(1.5rem * ${(props) => props.$size});
  line-height: calc((2.75rem / 2) * ${(props) => props.$size});
  font-size: calc((2.5rem / 2) * ${(props) => props.$size});
  color: ${(props) => {
    if (props.$themeMode === "light") {
      return props.theme.colors.main;
    } if (typeof props.$color === "string") {
      return props.$color;
    }
    return props.theme.colors.primary.main;
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
    border-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.theme.colors.)};
  }

  &:hover input:not(:checked):not(:disabled) ~ span {
    border-width: calc(0.2rem * ${(props) => props.$size});
    border-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color.primary[600])};
  }

  &:hover input:checked:not(:disabled) ~ span {
    background-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color.primary[600])};
  }

  & input:checked ~ span {
    background-color: ${(props) => (typeof props.$color === "string" ? props.$color : props.$color.primary[500])};
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
