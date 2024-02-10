// Tipos de fuentes que se pueden utilizar en la aplicación
type fontFamiliesTypes = {
	primary: string;
	secondary: string;
};

const fontFamilies: fontFamiliesTypes = {
	primary: "'Poppins', sans-serif",
	secondary: "'Roboto', sans-serif",
};

// Pesos de fuentes que se pueden utilizar en la aplicación
type fontWeightsTypes = {
	regular: number;
	medium: number;
	semibold: number;
};

const fontWeights: fontWeightsTypes = {
	regular: 400,
	medium: 500,
	semibold: 700,
};

// Tamaños de fuentes que se pueden utilizar en la aplicación
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

export const typography: typographyTypes = {
	families: fontFamilies,
	weights: fontWeights,
	sizes: fontSizes,
};
