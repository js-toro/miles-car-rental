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

import Logo from 'src/assets/icons/logo.svg?react';

import { HeaderContainer, HomeLink, NavMenu } from './styles';

export const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<HamburgerMenuButton />

			<HomeLink href="#initial">
				<i>
					<Logo />
				</i>
			</HomeLink>

			<NavMenu>
				<a href="#">Requisitos de Alquiler</a>
				<a href="#">Preguntas frecuentes</a>
				<a href="#">Localidades</a>
				<a href="#">Contáctanos</a>
			</NavMenu>

			<MoneyPanelButton />
			<LanguagePanelButton />
		</HeaderContainer>
	);
};
