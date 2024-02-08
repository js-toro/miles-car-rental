import React from 'react';

import { Header } from './header';
import { Home } from './pages';

export const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<Home />
		</>
	);
};
