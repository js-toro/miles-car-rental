import styled, { css } from 'styled-components';

const Label = styled.label`
	display: grid;
	grid:
		'icon .' 1fr
		'icon .' 1fr
		/ auto 1fr;
	align-items: center;
	column-gap: 16px;
	padding: 16px;

	background-color: ${({ theme }) => theme.colors.background};

	input {
		border: none;
		outline: none;

		font-size: 1.8rem;
		font-family: ${({ theme }) => theme.typography.families.primary};
		font-weight: ${({ theme }) => theme.typography.weights.medium};
		color: ${({ theme }) => theme.colors.texts};
		background-color: ${({ theme }) => theme.colors.background};

		&::placeholder {
			color: ${({ theme }) => theme.colors.texts};
		}

		&:focus::placeholder {
			color: transparent;
		}
	}
`;

export const PickupLabel = styled(Label)<{ $hasReturn: boolean }>`
	${({ $hasReturn, theme }) =>
		$hasReturn && `border-bottom: 1px solid ${theme.colors.gray[100]}`}
`;

export const ReturnLabel = styled(Label)<{ $hasReturn: boolean }>`
	transition: all 0.3s ease;

	${({ $hasReturn }) =>
		!$hasReturn &&
		css`
			max-height: 0;
			padding-block: 0;
		`}
`;

export const DatePickerLabel = styled(Label)`
	flex-grow: 1;
`;

export const LabelIcon = styled.i`
	grid-area: icon;
	display: flex;
	place-items: center;
`;

export const LabelSpan = styled.span`
	font-size: 1.4rem;
	font-weight: ${({ theme }) => theme.typography.weights.medium};
	color: ${({ theme }) => theme.colors.gray[900]};
`;


