import { IMenuState, menu } from '..';

export const menuSelector = (state: any, menu: menu) =>
	state.menu.find((menuState: IMenuState) => menuState.name === menu);
