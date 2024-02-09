import { Menus } from './menus';
import { Header } from './header';
import { Home } from './pages';

export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Home />
			<Menus />
		</>
	);
};
