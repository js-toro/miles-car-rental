import { Header } from './header';
import { Home } from './pages';
import { Panels } from './panels';

export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Home />
			<Panels />
		</>
	);
};
