import { menu } from 'src/redux';
import { useMenu } from 'src/hooks';
import {
	SideMenu,
	LinkLogo,
	LanguageMenuButton,
	SocialLinks,
} from 'src/components';

import { Content, Header, Links, Socials } from './styles';

import ReturnIcon from 'src/assets/icons/return-arrow.svg?react';

export const HamburgerMenu: React.FC = () => {
	const { isMenuOpen, handleToggleMenu } = useMenu(menu.hamburger);

	return (
		<SideMenu isMenuOpen={isMenuOpen}>
			<Content>
				<Header>
					<button onClick={handleToggleMenu}>
						<ReturnIcon />
					</button>

					<LinkLogo />
					<LanguageMenuButton />
				</Header>

				<Links>
					<a href="#">Requisitos de Alquiler</a>
					<a href="#">Preguntas frecuentes</a>
					<a href="#">Localidades</a>
					<a href="#">Contáctanos</a>
				</Links>

				<Socials>
					<h4>SIGUENOS EN</h4>
					<SocialLinks />
				</Socials>
			</Content>
		</SideMenu>
	);
};
