import { menu } from 'src/redux';
import { useMenu } from 'src/hooks';

import { SideMenu, LinkLogo, LanguageMenuButton } from 'src/components';

export const HamburgerMenu: React.FC = () => {
	const { isMenuOpen, handleToggleMenu } = useMenu(menu.hamburger);

	return (
		<SideMenu isMenuOpen={isMenuOpen}>
			<header>
				<button onClick={handleToggleMenu}>return</button>

				<LinkLogo />
				<LanguageMenuButton />
			</header>

			<menu>
				<a href="#">Requisitos de Alquiler</a>
				<a href="#">Preguntas frecuentes</a>
				<a href="#">Localidades</a>
				<a href="#">Contáctanos</a>
			</menu>

			<div>
				<h4>SIGUENOS EN</h4>

				<menu>
					<a href="#">f</a>
					<a href="#">t</a>
					<a href="#">g</a>
					<a href="#">i</a>
				</menu>
			</div>
		</SideMenu>
	);
};
