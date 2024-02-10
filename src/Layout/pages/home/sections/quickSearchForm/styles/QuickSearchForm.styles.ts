import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 24px;

	padding: 24px 16px 128px 16px;
`;

export const Heading = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	text-transform: uppercase;
`;

export const PickupAndReturnContainer = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: column;

	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 6px;
`;

export const Label = styled.label`
	display: grid;
	grid:
		'icon .' 1fr
		'icon .' 1fr
		/ auto 1fr;
	align-items: center;
	column-gap: 16px;
	padding: 16px;

	i {
		grid-area: icon;
		display: flex;
		place-items: center;
	}

	span {
		font-size: 1.4rem;
		font-weight: ${({ theme }) => theme.typography.weights.medium};
		color: ${({ theme }) => theme.colors.gray[900]};
	}

	input {
		border: none;
		outline: none;

		font-size: 1.8rem;
		font-family: ${({ theme }) => theme.typography.families.primary};
		font-weight: ${({ theme }) => theme.typography.weights.medium};
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

export const SwitchReturnContainer = styled.div`
	display: flex;
	gap: 16px;
`;

export const SwitchReturnText = styled.span`
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.4rem;
`;

export const DatePickersContainer = styled.div`
	display: flex;

	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 6px;

	& > label {
		border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
	}
`;

export const DateLabel = styled(Label)``;

export const SubmitButton = styled.button`
	position: absolute;
	left: calc(50% - 43px);
	bottom: 0;
	width: 86px;
	height: 60px;

	border-radius: 10px;
	border: 6px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);

	i {
		display: flex;
		place-content: center;

		svg {
			width: 22px;
			height: 22px;
		}
	}
`;

export const Background = styled.picture`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-position: center;
		overflow: visible;
	}
`;
