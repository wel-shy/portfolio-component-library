import styled, { DefaultTheme, StyledComponent } from "styled-components";

/** @component */
export const Container: StyledComponent<
  "div",
  DefaultTheme,
  {},
  never
> = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  padding: 2.5% 0;

  @media (min-width: ${({ theme }) => theme.sizes.screen.s}px) {
    width: 90%;
  }

  @media (min-width: ${(props) => props.theme.sizes.screen.l}px) {
    width: 80%;
  }
`;
