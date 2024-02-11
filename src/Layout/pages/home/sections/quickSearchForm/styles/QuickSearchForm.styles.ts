import styled from 'styled-components';
import { Container } from 'src/styles';

const buttonHeight = '70px';

export const FormContainer = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 24px;

	margin-bottom: ${buttonHeight};
	padding: 24px 16px;
`;

export const Heading = styled.h1`
	color: ${({ theme }) => theme.colors.white};
`;

export const PickupAndReturnContainer = styled(Container)`
	overflow: hidden;
	display: flex;
	flex-direction: column;

	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 6px;
`;

export const SwitchReturnContainer = styled(Container)`
	display: flex;
	gap: 16px;

	span {
		color: ${({ theme }) => theme.colors.white};
		font-size: 1.4rem;
	}
`;

export const DatePickersContainer = styled(Container)`
	display: flex;
	margin-bottom: calc(${buttonHeight} / 2);

	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 6px;
	overflow: hidden;

	& label:first-child {
		border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
	}
`;

export const SubmitButtonContainer = styled.div`
	position: absolute;
	bottom: calc(-${buttonHeight} / 2);
	left: 0;
	right: 0;

	display: flex;
	place-content: center;
`;

export const SubmitButton = styled.button`
	width: 80px;
	height: ${buttonHeight};

	border-radius: 10px;
	border: 6px solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
`;

export const SearchIcon = styled.i`
	display: flex;
	place-content: center;

	svg {
		width: 22px;
		height: 22px;
	}
`;

export const Background = styled.picture`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-position: bottom center;
		filter: ${({ theme }) =>
			theme.type === 'light' ? 'none' : 'saturate(0) brightness(0.5)'};
	}
`;
