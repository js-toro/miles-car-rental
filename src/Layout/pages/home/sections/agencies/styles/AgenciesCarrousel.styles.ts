import styled, { keyframes } from 'styled-components';

export const Carrousel = styled.section``;

const animateCarrousel = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 24px));
  }
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	overflow: hidden;
	width: max-content;

	animation-name: ${animateCarrousel};
	animation-duration: 45s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;

export const Link = styled.a`
	height: 22px;
`;
