import styled, { StyledComponent, DefaultTheme } from "styled-components";

/** @component */
export const H1: StyledComponent<"h1", DefaultTheme, {}, never> = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: ${({ theme }) => theme.sizes.text.title};
  font-weight: 700;
  margin: 0 0 2rem 0;

  @media (max-width: ${({ theme }) => theme.sizes.screen.s}px) {
    font-size: ${({ theme }) => theme.sizes.text.titleMobile};
  }
`;

/** @component */
export const H2: StyledComponent<"h2", DefaultTheme, {}, never> = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.text.subtitle};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 700;
  margin: 0 0 2rem 0;
`;

/** @component */
export const H3: StyledComponent<"h3", DefaultTheme, {}, never> = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1.75rem;
  margin: 0 0 1.75rem 0;
`;

/** @component */
export const H4: StyledComponent<"h4", DefaultTheme, {}, never> = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1.5rem;
  margin: 0 0 1.5rem 0;
`;

/** @component */
export const H5: StyledComponent<"h5", DefaultTheme, {}, never> = styled.h5`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1.25rem;
  margin: 0 0 1.25rem 0;
`;

/** @component */
export const H6: StyledComponent<"h6", DefaultTheme, {}, never> = styled.h6`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1rem;
  margin: 0 0 1rem 0;
`;
