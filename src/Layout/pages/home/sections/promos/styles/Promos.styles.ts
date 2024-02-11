import styled from 'styled-components';

export const PromosContainer = styled.section`
	margin: 3.2rem 0;

	user-select: none;
	overflow-x: scroll;
	overscroll-behavior-x: contain;
	scrollbar-width: thin;
	scroll-behavior: smooth;
`;

export const PromosCarrousel = styled.div`
	padding: 0 1.6rem;
	display: flex;
	justify-content: center;

	min-width: max-content;
	max-width: 100vw;
	gap: 16px;
`;
