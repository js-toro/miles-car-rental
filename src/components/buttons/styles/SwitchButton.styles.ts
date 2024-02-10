import styled from 'styled-components';

export const StyledButton = styled.span<{ $isActive: boolean }>`
	display: flex;
	align-items: center;

	width: 32px;
	height: 20px;
	padding: 2px;

	border-radius: 10px;
	border: 2px solid ${({ theme }) => theme.colors.white};

	&:hover {
		cursor: pointer;
	}

	&::before {
		content: '';
		position: relative;
		left: ${({ $isActive }) => ($isActive ? '12px' : '0')};
		transition: left 0.2s ease-in-out;

		width: 12px;
		height: 12px;

		background-color: ${({ theme }) => theme.colors.white};
		border-radius: 50%;
	}
`;
