import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { ColorModifier } from "../../../types";
import getColorModifierHexCode from "../../../utils/getColorModifierHexCode";
interface ButtonProps {
  buttonType?: ColorModifier;
}

/** @component */
export const Button: StyledComponent<
  "button",
  DefaultTheme,
  ButtonProps,
  never
> = styled.button<ButtonProps>`
  background: transparent;
  border: 1px solid
    ${({ theme, buttonType }) => getColorModifierHexCode(buttonType, theme)};
  border-radius: 5px;
  color: ${({ theme, buttonType }) =>
    getColorModifierHexCode(buttonType, theme)};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1em;
  padding: 0.5em;
  margin: 0 0.5em;
  min-width: 5em;
  transition: 0.25s ease all;

  &:hover {
    background: ${({ theme, buttonType }) =>
      getColorModifierHexCode(buttonType, theme)};
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${(props) => props.theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    cursor: not-allowed;
  }
`;
