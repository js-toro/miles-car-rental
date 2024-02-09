import { colorsTypes, darkColors, lightColors } from './lib';
import { breakpoints, breakpointsTypes } from './lib';
import { typography, typographyTypes } from './lib';

import 'styled-components';

type themeTypes = {
	colors: colorsTypes;
	typography: typographyTypes;
	breakpoints: breakpointsTypes;
};

export const lightTheme: themeTypes = {
	colors: lightColors,
	typography,
	breakpoints,
};

export const darkTheme: themeTypes = {
	colors: darkColors,
	typography,
	breakpoints,
};

// Declaramos nuestro tema para que styled-components lo reconozca
declare module 'styled-components' {
	export interface DefaultTheme extends themeTypes {}
}
