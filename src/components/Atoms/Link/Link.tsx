import styled, { StyledComponent, DefaultTheme } from "styled-components";

/** @component */
export const Link: StyledComponent<"a", DefaultTheme, {}, never> = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: 0.25s ease all;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`;
