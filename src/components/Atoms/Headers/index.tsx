import { ITheme } from "../../../theme/theme";
import styled from "styled-components";

/** @component */
export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-size: ${({ theme }) => theme.sizes.text.title};
  font-weight: 700;
  margin: 0 0 2rem 0;

  @media (max-width: ${({ theme }) => theme.sizes.screen.mobile}) {
    font-size: ${({ theme }) => theme.sizes.text.titleMobile};
  }
`;

/** @component */
export const H2 = styled.h2`
  color: ${({ theme }) => (theme as ITheme).colors.text};
  font-size: ${({ theme }) => (theme as ITheme).sizes.text.subtitle};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-weight: 700;
  margin: 0 0 2rem 0;
`;

/** @component */
export const H3 = styled.h3`
  color: ${({ theme }) => (theme as ITheme).colors.text};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-size: 1.75rem;
  margin: 0 0 1.75rem 0;
`;

/** @component */
export const H4 = styled.h4`
  color: ${({ theme }) => (theme as ITheme).colors.text};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-size: 1.5rem;
  margin: 0 0 1.5rem 0;
`;

/** @component */
export const H5 = styled.h5`
  color: ${({ theme }) => (theme as ITheme).colors.text};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-size: 1.25rem;
  margin: 0 0 1.25rem 0;
`;

/** @component */
export const H6 = styled.h6`
  color: ${({ theme }) => (theme as ITheme).colors.text};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-size: 1rem;
  margin: 0 0 1rem 0;
`;
