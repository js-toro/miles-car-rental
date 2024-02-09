import { Content, Heading, Design, Description } from './styles';

type PromoCardProps = {
	title: string | JSX.Element;
	description: string | JSX.Element;
	image: string;
	alt: string;
};

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
