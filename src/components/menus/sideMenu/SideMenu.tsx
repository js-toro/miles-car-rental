import { MenuContent } from '.';

type SideMenuProps = {
	children: React.ReactNode;
	isMenuOpen?: boolean;
};

export const SideMenu: React.FC<SideMenuProps> = ({
	isMenuOpen = false,
	children,
}) => {
	return <MenuContent $isMenuOpen={isMenuOpen}>{children}</MenuContent>;
};
