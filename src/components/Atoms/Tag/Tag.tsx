import styled from "styled-components";
import { ITheme } from "../../../theme/theme";
import { ColorModifier } from "../../../types/index";
import getColorModifierHexCode from "../../../utils/getColorModifierHexCode";

interface TagProps {
  color: ColorModifier;
}

/** @component */
export const Tag = styled.span<TagProps>`
  background-color: ${({ theme, color = "grey" }) =>
    getColorModifierHexCode(color, theme)};
  border-radius: 5px;
  color: ${({ theme }) => (theme as ITheme).colors.white};
  font-family: ${({ theme }) => (theme as ITheme).font.sans};
  font-weight: bold;
  margin: 0.25em;
  padding: 0.5em;
`;
