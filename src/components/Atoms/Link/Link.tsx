import styled from "styled-components";
import { ITheme } from "../../../theme/theme";

/** @component */
export const Link = styled.a`
  color: ${({ theme }) => (theme as ITheme).colors.primary};
  text-decoration: none;
  transition: 0.25s ease all;

  &:hover {
    color: ${({ theme }) => (theme as ITheme).colors.textAccent};
  }
`;
