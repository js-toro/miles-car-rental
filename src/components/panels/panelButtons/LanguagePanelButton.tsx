import { panelName } from 'src/redux';
import { usePanel } from 'src/hooks';

import LanguageIcon from '/src/assets/icons/language-co.svg?react';

/**
 * Botón para abrir el panel de idiomas
 */
export const LanguagePanelButton: React.FC = () => {
	const { handleTogglePanel } = usePanel(panelName.language);

	return (
		<button onClick={handleTogglePanel}>
			<LanguageIcon />
		</button>
	);
};
