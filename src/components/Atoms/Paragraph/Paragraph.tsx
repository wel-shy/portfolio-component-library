import styled from "styled-components";
import { ITheme } from "../../../theme/theme";

interface ParagraphProps {
  large?: boolean;
}

/** @component */
export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ theme, large }) =>
    large
      ? (theme as ITheme).sizes.text.paragraphLarge
      : (theme as ITheme).sizes.text.paragraph};
`;
