import { panelName } from 'src/redux';
import { usePanel } from 'src/hooks';

import MoneyIcon from '/src/assets/icons/money.svg?react';

/**
 * Botón para abrir el panel de monedas
 */
export const MoneyPanelButton: React.FC = () => {
	const { handleTogglePanel } = usePanel(panelName.money);

	return (
		<button onClick={handleTogglePanel}>
			<MoneyIcon />
		</button>
	);
};
