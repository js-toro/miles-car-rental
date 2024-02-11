import { useLayoutEffect } from 'react';

type MainContentProps = {
	children: React.ReactNode;
};

/**
 * Componente que representa el contenido principal de la aplicación.
 * Ajusta el margen superior para que no se superponga con el header.
 *
 * @param children Contenido principal de alguna página.
 */
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
