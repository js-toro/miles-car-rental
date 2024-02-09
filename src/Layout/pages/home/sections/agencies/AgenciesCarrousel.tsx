import { Carrousel, Content, Link } from './styles';
import { agencies } from './agencies';

export const AgenciesCarrousel: React.FC = () => {
	return (
		<Carrousel>
			<Content>
				{agencies.map((logo, index) => (
					<Link href="/" key={index}>
						<img key={index} src={logo.src} alt={logo.alt} />
					</Link>
				))}
			</Content>
		</Carrousel>
	);
};
