import { colorsTypes, darkColors, lightColors } from '.';
import { breakpoints, breakpointsTypes } from '.';
import { typography, typographyTypes } from '.';

type themeTypes = {
	Colors: colorsTypes;
	Typography: typographyTypes;
	Breakpoints: breakpointsTypes;
};

export const lightTheme: themeTypes = {
	Colors: lightColors,
	Typography: typography,
	Breakpoints: breakpoints,
};

export const darkTheme: themeTypes = {
	Colors: darkColors,
	Typography: typography,
	Breakpoints: breakpoints,
};
