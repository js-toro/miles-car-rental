import styled from 'styled-components';

import DesignPlus from 'src/assets/designs/plus.svg?react';

export const Content = styled.article`
	position: relative;

	display: grid;
	grid:
		'. .' auto
		'text text' auto
		/ 1fr 1fr;
	align-items: center;
	row-gap: 32px;

	padding: 8px 8px 16px 8px;
	border-radius: 16px;
	border: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const Design = styled(DesignPlus)`
	position: absolute;
	z-index: -1;
	top: 18px;
	left: 40%;
`;

export const Heading = styled.h4`
	position: relative;
	z-index: -1;

	text-align: center;
	text-transform: uppercase;
	font-size: 2.2rem;
	font-weight: ${({ theme }) => theme.typography.weights.semibold};

	span {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Description = styled.p`
	grid-area: text;
	text-align: center;
`;
