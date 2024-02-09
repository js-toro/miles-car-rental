import {
	LinkLogo,
	HamburgerMenuButton,
	LanguageMenuButton,
	MoneyMenuButton,
} from 'src/components';

import { HeaderContainer } from './styles';

export const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<HamburgerMenuButton />
			<LinkLogo />
			<MoneyMenuButton />
			<LanguageMenuButton />
		</HeaderContainer>
	);
};
