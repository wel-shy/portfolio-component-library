import { ITheme } from "../theme/theme";
import { ColorModifier } from "../types";

const getColorModifierHexCode = (
  style: ColorModifier = "primary",
  theme: ITheme
): string => {
  return theme.colors[style];
};

export default getColorModifierHexCode;
