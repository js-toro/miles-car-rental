import { menu } from 'src/redux';
import { useMenu } from 'src/hooks';

import HamburguerMenuIcon from '/src/assets/icons/burguer-menu.svg?react';

export const HamburgerMenuButton: React.FC = () => {
	const { handleToggleMenu } = useMenu(menu.hamburger);

	return (
		<button onClick={handleToggleMenu}>
			<HamburguerMenuIcon />
		</button>
	);
};
