import { useDispatch } from 'react-redux';
import { toggleTheme } from 'src/redux';

import themeToggle from 'src/assets/icons/theme-toggle.webp';

import { Button } from './styles';

export const ThemeToggleButton = () => {
	const dispatch = useDispatch();

	const handleThemeChange = () => {
		dispatch(toggleTheme());
	};

	return (
		<Button onClick={handleThemeChange}>
			<img src={themeToggle} draggable={false} />
		</Button>
	);
};
