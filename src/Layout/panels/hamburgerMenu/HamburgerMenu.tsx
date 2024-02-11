/**
 * @file HamburgerMenu.tsx
 *
 * Componente que renderiza el diseño del menú de hamburguesa de la aplicación.
 */

import { useTheme } from 'styled-components';
import { usePanel, useMediaQuery } from 'src/hooks';
import { panelName } from 'src/redux';
import {
	SidePanel,
	LanguagePanelButton,
	ThemeToggleButton,
} from 'src/components';

import { Content, Header, Links, Socials } from './styles';

import Logo from 'src/assets/icons/logo.svg?react';
import ReturnIcon from 'src/assets/icons/return-arrow.svg?react';
import FacebookIcon from '/src/assets/icons/facebook.svg?react';
import TwitterIcon from '/src/assets/icons/twitter.svg?react';
import GooglePlusIcon from '/src/assets/icons/google-plus.svg?react';
import InstagramIcon from '/src/assets/icons/instagram.svg?react';

export const HamburgerMenu: React.FC = () => {
	const { isPanelOpen, handleTogglePanel } = usePanel(panelName.hamburger);

	const breakpoint = useTheme().breakpoints.tablet.large;
	const isMobile = useMediaQuery(breakpoint);

	if (isMobile) {
		return (
			<SidePanel isPanelOpen={isPanelOpen}>
				<Content>
					<Header>
						<button onClick={handleTogglePanel}>
							<i>
								<ReturnIcon />
							</i>
						</button>

						<a href="#initial">
							<i>
								<Logo />
							</i>
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
								<i>
									<FacebookIcon />
								</i>
							</a>

							<a href="#">
								<i>
									<TwitterIcon />
								</i>
							</a>

							<a href="#">
								<i>
									<GooglePlusIcon />
								</i>
							</a>

							<a href="#">
								<i>
									<InstagramIcon />
								</i>
							</a>

							<ThemeToggleButton />
						</menu>
					</Socials>
				</Content>
			</SidePanel>
		);
	}

	return <></>;
};
