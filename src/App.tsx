import React from 'react';

import { ThemeProvider, GlobalStyles } from './styles';
import { Layout } from './Layout';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Layout />
		</ThemeProvider>
	);
};

export default App;
