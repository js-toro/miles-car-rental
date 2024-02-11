/**
 * @file Trustpilot.tsx
 *
 * Componente que renderiza el diseño de la sección de Trustpilot.
 */

import {
	Content,
	RaitingContainer,
	RaitingStars,
	RaitingText,
	Text,
	TrustpilotLogo,
} from './styles';

import trustpilot from 'src/assets/logos/trustpilot.svg';
import EmptyRaitingStar from 'src/assets/icons/empty-raiting-star.svg?react';
import HalfRaitingStar from 'src/assets/icons/half-raiting-star.svg?react';
import FullRaitingStar from 'src/assets/icons/full-rating-star.svg?react';

export const Trustpilot: React.FC = () => {
	const rating = 4.7;

	return (
		<Content>
			<RaitingContainer>
				<TrustpilotLogo src={trustpilot} alt="Trustpilot" draggable={false} />
				<RaitingText>{rating} / 5</RaitingText>
				<RaitingStars>
					{[
						[...Array(5)].map((_, index) => {
							const star = index + 1;
							const halfStar = star - 0.5;
							const isHalfStar = rating >= halfStar && rating < star;
							const isFullStar = rating >= star;

							if (isFullStar) {
								return (
									<i key={index}>
										<FullRaitingStar />
									</i>
								);
							}

							if (isHalfStar) {
								return (
									<i key={index}>
										<HalfRaitingStar />
									</i>
								);
							}

							return (
								<i key={index}>
									<EmptyRaitingStar />
								</i>
							);
						}),
					]}
				</RaitingStars>
			</RaitingContainer>
			<Text>Basado en 3312+ comentarios</Text>
		</Content>
	);
};
