import styled, { keyframes } from 'styled-components';

export const Carrousel = styled.section`
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet.medium}px) {
		margin: 64px 16px;
	}
`;

const animateCarrouselMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 25px));
  }
`;

const animateCarrouselDesktop = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 50px));
  }
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	overflow: visible;
	width: max-content;

	animation-name: ${animateCarrouselMobile};
	animation-duration: 45s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet.medium}px) {
		gap: 100px;
		animation-name: ${animateCarrouselDesktop};
	}
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
