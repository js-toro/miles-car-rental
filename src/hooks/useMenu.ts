import { useSelector, useDispatch } from 'react-redux';
import { panelName, togglePanel, panelSelector } from 'src/redux';

/**
 * Hook que devuelve el estado y la función para cambiar el estado de un panel.
 * @param panel - El nombre del panel.
 * @returns El estado y la función para cambiar el estado de un panel.
 */
export const usePanel = (panel: panelName) => {
	const dispatch = useDispatch();
	const isPanelOpen = useSelector(
		(state) => panelSelector(state, panel)?.isOpen
	);

	/**
	 * Cambia el estado del panel
	 */
	const handleTogglePanel = () => {
		dispatch(togglePanel({ name: panel }));
	};

	return { isPanelOpen, handleTogglePanel };
};
