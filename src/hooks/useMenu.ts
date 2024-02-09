import { useSelector, useDispatch } from 'react-redux';
import { menu, toggleMenu, menuSelector } from 'src/redux';

export const useMenu = (menu: menu) => {
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state) => menuSelector(state, menu)?.isOpen);

	const handleToggleMenu = () => {
		dispatch(toggleMenu({ name: menu }));
	};

	return { isMenuOpen, handleToggleMenu };
};
