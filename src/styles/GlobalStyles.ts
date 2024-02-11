import styled, { createGlobalStyle, css } from 'styled-components';
import './css/normalize.css';
import 'react-datepicker/dist/react-datepicker.css';

export const GlobalStyles = createGlobalStyle`
  body {
    ${({ theme }) => css`
			background-color: ${theme.colors.background};
			color: ${theme.colors.black};
			font-family: ${theme.typography.families.primary};
			font-weight: ${theme.typography.weights.medium};
			font-size: ${theme.typography.sizes.text.xs};
		`};
  }

	h1 {
		text-align: center;
		text-transform: uppercase;

		${({ theme }) => css`
			color: ${({ theme }) => theme.colors.white};
			font-weight: ${theme.typography.weights.semibold};
			font-size: ${theme.typography.sizes.heading.xs};
		`}
	}

	section {
		margin: 3.2rem 1.6rem;
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 768px;
	margin: 0 auto;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet.small}px) {
		width: 80%;
		max-width: 600px;
	}
`;
