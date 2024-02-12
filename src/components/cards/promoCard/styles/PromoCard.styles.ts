import styled from 'styled-components';

import DesignPlus from 'src/assets/designs/plus.svg?react';

export const Content = styled.article`
	position: relative;
	z-index: 0;

	display: grid;
	grid:
		'. .' auto
		'text text' auto
		/ 1fr 1fr;
	align-items: center;
	row-gap: 16px;

	width: calc(100dvw - 32px);
	max-width: 450px;
	padding: 8px 8px 16px 8px;

	border-radius: 16px;
	border: 1px solid ${({ theme }) => theme.colors.gray[100]};
	background-color: ${({ theme }) => theme.colors.background};

	img {
		z-index: 1;
		object-fit: contain;
	}
`;

export const Design = styled(DesignPlus)`
	position: absolute;
	top: 18px;
	left: 41%;
`;

export const Heading = styled.h4`
	position: relative;

	text-align: center;
	text-transform: uppercase;
	font-size: 2.2rem;
	font-weight: ${({ theme }) => theme.typography.weights.semibold};
	color: ${({ theme }) => theme.colors.texts};

	span {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Description = styled.p`
	grid-area: text;
	margin: 0 8px;

	line-height: 1.2;
	text-align: center;
	color: ${({ theme }) => theme.colors.texts};
`;
