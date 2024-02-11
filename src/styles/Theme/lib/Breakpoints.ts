export type Device = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export type breakpointsTypes = {
	[device in Device]: {
		small: number;
		medium: number;
		large: number;
	};
};

/**
 * Objeto que define los brakpoints utilizados en la aplicación.
 */
export const breakpoints: breakpointsTypes = {
	mobile: {
		small: 320,
		medium: 380,
		large: 425,
	},
	tablet: {
		small: 576,
		medium: 768,
		large: 992,
	},
	laptop: {
		small: 1024,
		medium: 1200,
		large: 1440,
	},
	desktop: {
		small: 1600,
		medium: 1920,
		large: 2560,
	},
};
