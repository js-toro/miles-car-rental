type fontFamiliesTypes = {
	primary: string;
	secondary: string;
};

/**
 * Tipos de fuentes que se pueden utilizar en la aplicación
 */
const fontFamilies: fontFamiliesTypes = {
	primary: "'Poppins', sans-serif",
	secondary: "'Roboto', sans-serif",
};

type fontWeightsTypes = {
	regular: number;
	medium: number;
	semibold: number;
};

/**
 * Pesos de fuentes que se pueden utilizar en la aplicación
 */
const fontWeights: fontWeightsTypes = {
	regular: 400,
	medium: 500,
	semibold: 700,
};

type fontSizesTypes = {
	heading: {
		xs: string;
	};
	text: {
		xs: string;
	};
};

const fontSizes: fontSizesTypes = {
	heading: {
		xs: '1.8rem',
	},
	text: {
		xs: '1.6rem',
	},
};

export type typographyTypes = {
	families: fontFamiliesTypes;
	weights: fontWeightsTypes;
	sizes: fontSizesTypes;
};

/**
 * Objecto que define los estilos de fuentes de la aplicación
 */
export const typography: typographyTypes = {
	families: fontFamilies,
	weights: fontWeights,
	sizes: fontSizes,
};
