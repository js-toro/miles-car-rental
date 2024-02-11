import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux';
import { GlobalStyles, ThemeProvider } from './styles';
import { Layout } from './layout';

// React Datepicker
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

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
