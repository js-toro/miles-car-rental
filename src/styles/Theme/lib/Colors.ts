type grayScale = {
	[100]: string;
	[200]: string;
	[300]: string;
	[400]: string;
	[900]: string;
};

export type colorsTypes = {
	primary: string;
	background: string;
	green: string;
	black: string;
	white: string;
	gray: grayScale;
};

export const lightColors: colorsTypes = {
	primary: '#E6484B',
	green: '#00B67A',
	black: '#000000',
	white: '#FFFFFF',
	gray: {
		[100]: '#E6E6E6',
		[200]: '#DCDCE6',
		[300]: '#C8C8C8',
		[400]: '#A0A0A0',
		[900]: '#6E6E6E',
	},
	background: '#FFFFFF',
};

export const darkColors: colorsTypes = {
	primary: '#E6484B',
	green: '#00B67A',
	black: '#000000',
	white: '#FFFFFF',
	gray: {
		[100]: '#E6E6E6',
		[200]: '#DCDCE6',
		[300]: '#C8C8C8',
		[400]: '#A0A0A0',
		[900]: '#6E6E6E',
	},
	background: '#1D1E22',
};
