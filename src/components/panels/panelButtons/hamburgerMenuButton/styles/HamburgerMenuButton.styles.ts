import styled from 'styled-components';

export const Button = styled.button`
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet.large}px) {
		display: none;
	}
`;
