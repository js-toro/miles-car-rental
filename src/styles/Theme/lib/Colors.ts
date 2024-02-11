type grayScale = {
	[100]: string;
	[200]: string;
	[300]: string;
	[400]: string;
	[500]: string;
	[600]: string;
	[900]: string;
};

export type colorsTypes = {
	primary: string;
	green: string;
	black: string;
	white: string;
	gray: grayScale;
	background: string;
	texts: string;
};

export const lightColors: colorsTypes = {
	primary: '#E6484B',
	green: '#00B67A',
	black: '#000000',
	white: '#ffffff',
	gray: {
		[100]: '#E6E6E6',
		[200]: '#DCDCE6',
		[300]: '#C8C8C8',
		[400]: '#A0A0A0',
		[500]: '#f9f9f9',
		[600]: '#eaeaea',
		[900]: '#6E6E6E',
	},
	background: '#FFFFFF',
	texts: '#000000',
};

export const darkColors: colorsTypes = {
	primary: '#E6484B',
	green: '#00B67A',
	black: '#000000',
	white: '#d1d3d6',
	gray: {
		[100]: '#3c3e46',
		[200]: '#35373e',
		[300]: '#35373e',
		[400]: '#A0A0A0',
		[500]: '#35373e',
		[600]: '#35373e',
		[900]: '#A0A0A0',
	},
	background: '#292b30',
	texts: '#d1d3d6',
};
