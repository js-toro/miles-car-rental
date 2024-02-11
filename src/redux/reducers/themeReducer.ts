import { createSlice } from '@reduxjs/toolkit';

/**
 * Enumeración que define los nombres de los temas.
 */
export enum themeName {
	light = 'light',
	dark = 'dark',
}

/**
 * Interfaz que define el estado de un tema.
 */
export interface IThemeState {
	name: themeName;
}

const initialState: IThemeState = {
	name: themeName.light,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		/**
		 * Cambia el tema de la aplicación.
		 */
		toggleTheme: (state) => {
			state.name =
				state.name === themeName.light ? themeName.dark : themeName.light;
		},
	},
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
