import { useEffect, useState } from 'react';

/**
 * Hook que permite saber si el ancho de la pantalla es menor al valor especificado.
 * @param minWidth - El ancho mínimo de la pantalla.
 * @returns Un booleano que indica si el ancho de la pantalla es menor al valor especificado.
 */
export const useMediaQuerie = (minWidth: number) => {
	const [response, setResponse] = useState(false);

	useEffect(() => {
		setResponse(window.innerWidth < minWidth);

		const handleResize = () => {
			setResponse(window.innerWidth < minWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return response;
};
