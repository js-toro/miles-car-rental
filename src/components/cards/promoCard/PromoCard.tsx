import { Content, Heading, Design, Description } from './styles';

type PromoCardProps = {
	title: string | JSX.Element;
	description: string | JSX.Element;
	image: string;
	alt: string;
};

/**
 * Componente que muestra una tarjeta promocional
 * @param {string | JSX.Element} title - Título de la tarjeta
 * @param {string | JSX.Element} description - Descripción de la tarjeta
 * @param {string} image - Imagen de la tarjeta
 * @param {string} alt - Texto alternativo de la imagen
 */
export const PromoCard: React.FC<PromoCardProps> = ({
	title,
	description,
	image,
	alt,
}) => {
	return (
		<Content>
			<img src={image} alt={alt} draggable={false} />
			<Design />
			<Heading>{title}</Heading>
			<Description>{description}</Description>
		</Content>
	);
};
