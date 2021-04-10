import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { ColorModifier } from "../../../types/index";
import getColorModifierHexCode from "../../../utils/getColorModifierHexCode";

interface TagProps {
  color: ColorModifier;
}

/** @component */
export const Tag: StyledComponent<
  "span",
  DefaultTheme,
  TagProps,
  never
> = styled.span<TagProps>`
  background-color: ${({ theme, color = "grey" }) =>
    getColorModifierHexCode(color, theme)};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: bold;
  margin: 0.25em;
  padding: 0.5em;
`;
