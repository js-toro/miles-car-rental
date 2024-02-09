import { ThemeProvider as Provider } from 'styled-components';

import { lightTheme } from './Theme';

type ThemeProps = {
	children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
	// TODO: con useContext podremos cambiar el tema de la app en un futuro

	return <Provider theme={lightTheme}>{children}</Provider>;
};
