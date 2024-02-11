import { panelName } from 'src/redux';
import { usePanel } from 'src/hooks';

import HamburguerMenuIcon from '/src/assets/icons/burguer-menu.svg?react';

import { Button } from './styles';

/**
 * Botón para abrir el menú hamburguesa
 */
export const HamburgerMenuButton: React.FC = () => {
	const { handleTogglePanel } = usePanel(panelName.hamburger);

	return (
		<Button onClick={handleTogglePanel}>
			<HamburguerMenuIcon />
		</Button>
	);
};
