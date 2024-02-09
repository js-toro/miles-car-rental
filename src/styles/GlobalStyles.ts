import { createGlobalStyle, css } from 'styled-components';
import './css/normalize.css';

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
		${({ theme }) => css`
			font-weight: ${theme.typography.weights.semibold};
			font-size: ${theme.typography.sizes.heading.xs};
		`}
	}
`;
