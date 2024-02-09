import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux';
import { GlobalStyles, ThemeProvider } from './styles';
import { Layout } from './layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<GlobalStyles />

				{/* TODO: reemplazar layout por router provider */}
				<Layout />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
