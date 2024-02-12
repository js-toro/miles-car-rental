/**
 * @file Promos.tsx
 *
 * Componente que renderiza el diseño de las promociones de la aplicación.
 */

import PCAR_US from 'src/assets/images/PCAR_US.webp';
import { PromoCard } from 'src/components';

import { PromosCarrousel, PromosContainer } from './styles';

export const Promos: React.FC = () => {
	return (
		<PromosContainer>
			<PromosCarrousel>
				{[...Array(5)].map((_, index) => (
					<PromoCard
						key={index}
						title={
							<>
								¡Seguro de viaje <span>gratis!</span>
							</>
						}
						description={
							<>
								Con cobertura médica frente al Coronavirus de{' '}
								<b>USD $100.000</b>
							</>
						}
						image={PCAR_US}
						alt="Imagen de un auto con un seguro de viaje gratis"
					/>
				))}
			</PromosCarrousel>
		</PromosContainer>
	);
};
