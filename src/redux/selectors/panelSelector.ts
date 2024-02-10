import { IPanelState, panelName } from '..';

/**
 * Devuelve el estado del panel con el nombre especificado.
 * @param state - El estado global de Redux.
 * @param menu
 * @returns El estado del panel con el nombre especificado.
 */
export const panelSelector = (state: any, panel: panelName) =>
	state.panel.find((panelState: IPanelState) => panelState.name === panel);
