/**
 * @file Home.tsx
 *
 * Componente que renderiza el diseño de la página de inicio de la aplicación.
 */

import { Promos, AgenciesCarrousel, Trustpilot } from './sections';

export const Home: React.FC = () => {
	return (
		<main>
			<Promos />
			<Trustpilot />
			<AgenciesCarrousel />
		</main>
	);
};
