/**
 * @file AgenciesCarrousel.tsx
 *
 * Componente que renderiza el diseño del carrusel de agencias.
 */

import { Carrousel, Content, Link } from './styles';
import { agencies } from './agencies';

export const AgenciesCarrousel: React.FC = () => {
	return (
		<Carrousel>
			<Content>
				{agencies.map((logo, index) => (
					<Link key={index} href={logo.href}>
						<img src={logo.src} alt={logo.alt} draggable={false} />
					</Link>
				))}
			</Content>
		</Carrousel>
	);
};
