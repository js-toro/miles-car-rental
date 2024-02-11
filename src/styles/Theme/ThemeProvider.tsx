import { useSelector } from 'react-redux';
import { ThemeProvider as Provider } from 'styled-components';

import { lightTheme, darkTheme } from './Theme';

type ThemeProps = {
	children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
	const theme = useSelector((state: any) => state.theme.name);

	return (
		<Provider theme={theme === 'light' ? lightTheme : darkTheme}>
			{children}
		</Provider>
	);
};
