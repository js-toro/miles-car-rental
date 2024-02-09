import { createSlice } from '@reduxjs/toolkit';

export enum menu {
	hamburger = 'HamburgerMenu',
	money = 'MoneyMenu',
	language = 'LanguageMenu',
}

export type IMenuState = {
	name: menu;
	isOpen: boolean;
};

const initialState: IMenuState[] = [
	{
		name: menu.hamburger,
		isOpen: false,
	},
	{
		name: menu.money,
		isOpen: false,
	},
	{
		name: menu.language,
		isOpen: false,
	},
];

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		toggleMenu: (state, action) => {
			const { name } = action.payload;
			const menu = state.find((menu) => menu.name === name);

			if (menu) {
				menu.isOpen = !menu.isOpen;
			}
		},
	},
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenu } = menuSlice.actions;
