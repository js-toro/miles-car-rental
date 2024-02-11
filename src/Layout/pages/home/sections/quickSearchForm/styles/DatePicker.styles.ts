import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
	text-transform: capitalize;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet.large}px) {
		z-index: 999;
	}

	input {
		width: 100%;
		text-transform: capitalize;
		caret-color: transparent;

		&:hover {
			cursor: pointer;
		}
	}

	.react-datepicker__day--disabled:hover {
		cursor: not-allowed;
	}
`;
