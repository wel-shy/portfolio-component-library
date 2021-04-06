import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  padding: 2.5% 0;

  @media (min-width: ${(props) => props.theme.sizes.screen.mobile}) {
    width: 90%;
  }

  @media (min-width: ${(props) => props.theme.sizes.screen.desktop}) {
    width: 80%;
  }
`;
