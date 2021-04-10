import styled, { StyledComponent, DefaultTheme } from "styled-components";

interface ParagraphProps {
  large?: boolean;
}

/** @component */
export const Paragraph: StyledComponent<
  "p",
  DefaultTheme,
  ParagraphProps,
  never
> = styled.p<ParagraphProps>`
  font-size: ${({
    theme: {
      sizes: {
        text: { paragraph, paragraphLarge },
      },
    },
    large,
  }) => (large ? paragraphLarge : paragraph)};
`;
