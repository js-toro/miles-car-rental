/**
 * @file Header.tsx
 *
 * Componente que renderiza el diseño del encabezado de la aplicación.
 */

import {
	HamburgerMenuButton,
	LanguagePanelButton,
	MoneyPanelButton,
} from 'src/components';

import { HeaderContainer } from './styles';

import Logo from '/src/assets/icons/logo.svg?react';

export const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<HamburgerMenuButton />

			<a href="#initial">
				<Logo />
			</a>

			<MoneyPanelButton />
			<LanguagePanelButton />
		</HeaderContainer>
	);
};
