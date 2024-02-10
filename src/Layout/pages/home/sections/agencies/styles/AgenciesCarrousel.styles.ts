import styled, { keyframes } from 'styled-components';

export const Carrousel = styled.section``;

const animateCarrousel = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 25px));
  }
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	overflow: visible;
	width: max-content;

	animation-name: ${animateCarrousel};
	animation-duration: 45s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;

export const Link = styled.a`
	height: 22px;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.15);
	}

	img {
		object-fit: contain;
	}
`;
