/**
 * @file Home.tsx
 *
 * Componente que renderiza el diseño de la página de inicio de la aplicación.
 */

import { MainContent } from 'src/components';

import {
	QuickSearchForm,
	Promos,
	Trustpilot,
	AgenciesCarrousel,
} from './sections';

export const Home: React.FC = () => {
	return (
		<MainContent>
			<QuickSearchForm />
			<Promos />
			<Trustpilot />
			<AgenciesCarrousel />
		</MainContent>
	);
};
