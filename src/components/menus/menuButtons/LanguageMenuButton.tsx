import { menu } from 'src/redux';
import { useMenu } from 'src/hooks';

import LanguageIcon from '/src/assets/icons/language-co.svg?react';

export const LanguageMenuButton: React.FC = () => {
	const { handleToggleMenu } = useMenu(menu.language);

	return (
		<button onClick={handleToggleMenu}>
			<LanguageIcon />
		</button>
	);
};
