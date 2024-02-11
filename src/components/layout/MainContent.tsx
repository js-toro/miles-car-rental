import { useLayoutEffect } from 'react';

type MainContentProps = {
	children: React.ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
	// Ajusta el margen superior del main para que no se superponga con el header.
	useLayoutEffect(() => {
		const header: HTMLHeadElement | null = document.querySelector('header');
		const headerHeight = header?.clientHeight || 0;

		document
			.querySelector('main')
			?.style.setProperty('margin-top', `${headerHeight}px`);
	});

	return <main id="initial">{children}</main>;
};
