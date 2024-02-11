/**
 * Devuelve la fecha actual
 */
const today = new Date();

/**
 * Devuelve una fecha futura a partir de hoy.
 * @param days - Días a sumar a la fecha actual.
 * @returns Fecha futura.
 */
const upcoming = (days: number) => {
	return new Date(new Date().setDate(new Date().getDate() + days));
};

/**
 * Formatea una fecha a un formato legible.
 * @param date - Fecha a formatear.
 */
export const formatDate = (date: Date) => {
	return date.toLocaleString('es-ES', {
		day: 'numeric',
		month: 'short',
	});
};

export const date = {
	today,
	upcoming,
};
