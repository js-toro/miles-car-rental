import styled from 'styled-components';

export const Content = styled.div<{ $isPanelOpen: boolean }>`
	position: fixed;
	z-index: 2000;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;

	background-color: #fff;

	transform: ${({ $isPanelOpen }) =>
		$isPanelOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: transform 0.5s ease-in-out;
`;
