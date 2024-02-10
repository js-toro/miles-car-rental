/**
 * @file HamburgerMenu.tsx
 *
 * Componente que renderiza el diseño del menú de hamburguesa de la aplicación.
 */

import { panelName } from 'src/redux';
import { usePanel } from 'src/hooks';
import { SidePanel, LanguagePanelButton } from 'src/components';

import { Content, Header, Links, Socials } from './styles';

import Logo from '/src/assets/icons/logo.svg?react';
import ReturnIcon from 'src/assets/icons/return-arrow.svg?react';
import FacebookIcon from '/src/assets/icons/facebook.svg?react';
import TwitterIcon from '/src/assets/icons/twitter.svg?react';
import GooglePlusIcon from '/src/assets/icons/google-plus.svg?react';
import InstagramIcon from '/src/assets/icons/instagram.svg?react';

export const HamburgerMenu: React.FC = () => {
	const { isPanelOpen, handleTogglePanel } = usePanel(panelName.hamburger);

	return (
		<SidePanel isPanelOpen={isPanelOpen}>
			<Content>
				<Header>
					<button onClick={handleTogglePanel}>
						<ReturnIcon />
					</button>

					<a href="#initial">
						<Logo />
					</a>

					<LanguagePanelButton />
				</Header>

				<Links>
					<a href="#">Requisitos de Alquiler</a>
					<a href="#">Preguntas frecuentes</a>
					<a href="#">Localidades</a>
					<a href="#">Contáctanos</a>
				</Links>

				<Socials>
					<h4>SIGUENOS EN</h4>

					<menu>
						<a href="#">
							<FacebookIcon />
						</a>

						<a href="#">
							<TwitterIcon />
						</a>

						<a href="#">
							<GooglePlusIcon />
						</a>

						<a href="#">
							<InstagramIcon />
						</a>
					</menu>
				</Socials>
			</Content>
		</SidePanel>
	);
};
