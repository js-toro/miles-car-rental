import styled from 'styled-components';

export const MenuContent = styled.div<{ $isMenuOpen: boolean }>`
	position: fixed;
	z-index: 2000;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;

	background-color: #fff;

	transform: ${({ $isMenuOpen }) =>
		$isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: transform 0.5s ease-in-out;
`;
