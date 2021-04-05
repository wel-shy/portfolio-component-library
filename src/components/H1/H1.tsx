import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.text.title};
  margin: 0 0 2rem 0;

  @media (max-width: ${({theme}) => theme.sizes.screen.mobile}) {
    font-size: ${({theme}) => theme.sizes.text.titleMobile};
  }
`;