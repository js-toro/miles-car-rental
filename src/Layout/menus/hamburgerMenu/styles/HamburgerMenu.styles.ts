import styled from 'styled-components';

export const Content = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 100%;
	padding: 8px 16px 64px 16px;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Links = styled.menu`
	display: flex;
	flex-direction: column;
	gap: 64px;

	padding: 0 24px;

	a {
		font-size: 2.2rem;
		color: ${({ theme }) => theme.colors.black};
	}
`;

export const Socials = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	padding: 0 24px;

	h4 {
		font-size: 1.8rem;
		color: ${({ theme }) => theme.colors.gray[400]};
	}

	menu {
		display: flex;
		gap: 64px;
		align-items: center;
	}
`;
