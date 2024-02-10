/**
 * @file Trustpilot.tsx
 *
 * Componente que renderiza el diseño de la sección de Trustpilot.
 */

import {
	Content,
	RaitingContainer,
	RaitingText,
	Text,
	TrustpilotLogo,
} from './styles';

import trustpilot from 'src/assets/logos/trustpilot.svg';
import raitings from 'src/assets/designs/ratings.svg';

export const Trustpilot: React.FC = () => {
	return (
		<Content>
			<RaitingContainer>
				<TrustpilotLogo src={trustpilot} alt="Trustpilot" draggable={false} />
				<RaitingText>4.7 / 5</RaitingText>
				<img src={raitings} alt="raiting" draggable={false} />
			</RaitingContainer>
			<Text>Basado en 3312+ comentarios</Text>
		</Content>
	);
};
