import styled from 'styled-components';

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet.medium}px) {
		margin: 64px 16px;
	}
`;

export const RaitingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const TrustpilotLogo = styled.img`
	padding-right: 16px;
	border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const RaitingText = styled.p`
	flex-shrink: 0;
	font-family: ${({ theme }) => theme.typography.families.secondary};
	font-weight: ${({ theme }) => theme.typography.weights.regular};
	font-size: 2.2rem;
`;

export const RaitingStars = styled.div`
	flex-shrink: 0;
	display: flex;
	gap: 1px;
`;

export const Text = styled.p`
	text-align: center;
	font-weight: ${({ theme }) => theme.typography.weights.semibold};
	font-size: 1.2rem;
`;
