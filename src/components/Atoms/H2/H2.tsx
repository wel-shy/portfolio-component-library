import styled from "styled-components";
import { ITheme } from "../../../theme/theme";

export const H2 = styled.h2`
  color: ${({ theme }) => (theme as ITheme).colors.text};
  font-size: ${({ theme }) => (theme as ITheme).sizes.text.subtitle};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  margin: 0 0 2rem 0;
`;
