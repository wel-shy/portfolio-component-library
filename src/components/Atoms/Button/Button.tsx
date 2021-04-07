import styled from "styled-components";
import { ITheme } from "../../../theme/theme";
interface ButtonProps {
  buttonType?: "primary" | "info" | "warning" | "danger" | "dark";
}

const getColor = (
  style: "primary" | "info" | "warning" | "danger" | "dark" = "primary",
  theme: ITheme
): string => {
  return theme.colors[style];
};

/** @component */
export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 1px solid ${({ theme, buttonType }) => getColor(buttonType, theme)};
  border-radius: 5px;
  color: ${({ theme, buttonType }) => getColor(buttonType, theme)};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-size: 1em;
  padding: 0.5em;
  margin: 0 0.5em;
  min-width: 5em;
  transition: 0.25s ease all;

  &:hover {
    background: ${({ theme, buttonType }) => getColor(buttonType, theme)};
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
