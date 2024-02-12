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
	overflow: hidden;
	display: flex;
	margin-bottom: 24px;

	text-transform: capitalize;
	border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 6px;

	& label:first-child {
		border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
	}

	input {
		width: 100%;
		text-transform: capitalize;
		caret-color: transparent;

		&:hover {
			cursor: pointer;
		}
	}

	.react-datepicker {
		font-family: ${({ theme }) => theme.typography.families.primary};
		font-size: 1rem;
		background-color: ${({ theme }) => theme.colors.background};
		border: none;
		border-radius: 10px;
		padding: 32px 16px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);

		@media (max-width: ${({ theme }) => theme.breakpoints.tablet.large}px) {
			z-index: 999;
		}

		&__month-container {
			margin: 16px;
		}

		&__current-month {
			color: ${({ theme }) => theme.colors.texts};
		}

		&__header {
			background-color: transparent;
			border: none;
		}

		&__day {
			margin: 0;
			border-radius: 0;
			color: ${({ theme }) => theme.colors.texts};
			transition: all 0.1s ease;

			&--in-selecting-range,
			&:hover {
				background-color: ${({ theme }) => theme.colors.primary + 'aa'};
				color: ${({ theme }) => theme.colors.texts};
			}

			&--disabled {
				color: ${({ theme }) => theme.colors.gray[400]};
			}

			&--in-range {
				background-color: ${({ theme }) => theme.colors.primary + '55'};
				color: ${({ theme }) => theme.colors.texts};
			}

			/* &--in-selecting-range {
				background-color: ${({ theme }) => theme.colors.primary + 'aa'};
				color: ${({ theme }) => theme.colors.white};
			} */

			&--range-start,
			&--range-end {
				background-color: ${({ theme }) => theme.colors.primary};
				color: ${({ theme }) => theme.colors.white};
			}

			&--range-start {
				border-radius: 4px 0 0 4px;
			}

			&--range-end {
				border-radius: 0 4px 4px 0;
			}

			&-name {
				color: ${({ theme }) => theme.colors.gray[900]};
				font-weight: ${({ theme }) => theme.typography.weights.semibold};
			}

			&-names {
				margin: 16px 0;
			}
		}

		&__triangle {
			display: none;
		}
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
	width: 95px;
	height: ${buttonHeight};

	border-radius: 16px;
	border: 6px solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
`;

export const SearchIcon = styled.i`
	display: flex;
	place-content: center;

	svg {
		width: 26px;
		height: 26px;
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
