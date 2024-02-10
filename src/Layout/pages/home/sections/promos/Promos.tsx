/**
 * @file Promos.tsx
 *
 * Componente que renderiza el diseño de las promociones de la aplicación.
 */

import { PromoCard } from 'src/components';

import PCAR_US from 'src/assets/images/PCAR_US.png';

export const Promos: React.FC = () => {
	return (
		<section>
			{/* Aquí podríamos construir un carrusel y mapear una lista de promociones */}

			<PromoCard
				title={
					<>
						¡Seguro de viaje <span>gratis!</span>
					</>
				}
				description="Con cobertura médica frente al Coronavirus de USD $100.000"
				image={PCAR_US}
				alt="Imagen de un auto con un seguro de viaje gratis"
			/>
		</section>
	);
};
