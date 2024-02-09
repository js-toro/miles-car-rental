import { Carrousel, Content, Link } from './styles';
import { agencies } from './agencies';

export const AgenciesCarrousel: React.FC = () => {
	return (
		<Carrousel>
			<Content>
				{agencies.map((logo, index) => (
					<Link key={index} href={logo.href}>
						<img key={index} src={logo.src} alt={logo.alt} draggable={false} />
					</Link>
				))}
			</Content>
		</Carrousel>
	);
};
