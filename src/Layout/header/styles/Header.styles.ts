import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;

	padding: 8px 16px;

	display: flex;
	gap: 22px;

	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 0 0 2px #f9f9f9, 0 0 0 3px #eaeaea;

	& > a {
		margin-right: auto;
	}
`;

export const MobileNav = styled.nav``;
