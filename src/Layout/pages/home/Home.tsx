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
