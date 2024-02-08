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

export type typographyTypes = {
	Families: fontFamiliesTypes;
	Weights: fontWeightsTypes;
};

/**
 * Objecto que define los estilos de fuentes de la aplicación
 */
export const typography: typographyTypes = {
	Families: fontFamilies,
	Weights: fontWeights,
};
