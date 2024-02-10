import { createSlice } from '@reduxjs/toolkit';

/**
 * Enumeración que define los nombres de los paneles.
 */
export enum panelName {
	hamburger = 'HamburgerMenu',
	money = 'MoneyPanel',
	language = 'LanguagePanel',
}

/**
 * Interfaz que define el estado de un panel.
 */
export interface IPanelState {
	name: panelName;
	isOpen: boolean;
}

const initialState: IPanelState[] = [
	{
		name: panelName.hamburger,
		isOpen: false,
	},
	{
		name: panelName.money,
		isOpen: false,
	},
	{
		name: panelName.language,
		isOpen: false,
	},
];

export const panelSlice = createSlice({
	name: 'panel',
	initialState,
	reducers: {
		/**
		 * Activa el panel con el nombre especificado en el action.
		 */
		togglePanel: (state, action) => {
			const { name } = action.payload;
			const panel = state.find((panel) => panel.name === name);

			if (panel) {
				panel.isOpen = !panel.isOpen;
			}
		},
	},
});

export const panelReducer = panelSlice.reducer;
export const { togglePanel } = panelSlice.actions;
