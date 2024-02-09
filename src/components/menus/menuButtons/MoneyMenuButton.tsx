import { menu } from 'src/redux';
import { useMenu } from 'src/hooks';

import MoneyIcon from '/src/assets/icons/money.svg?react';

export const MoneyMenuButton: React.FC = () => {
	const { handleToggleMenu } = useMenu(menu.money);

	return (
		<button onClick={handleToggleMenu}>
			<MoneyIcon />
		</button>
	);
};
