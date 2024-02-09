import FacebookIcon from '/src/assets/icons/facebook.svg?react';
import TwitterIcon from '/src/assets/icons/twitter.svg?react';
import GooglePlusIcon from '/src/assets/icons/google-plus.svg?react';
import InstagramIcon from '/src/assets/icons/instagram.svg?react';

export const SocialLinks: React.FC = () => {
	return (
		<menu>
			<a href="#">
				<FacebookIcon />
			</a>

			<a href="#">
				<TwitterIcon />
			</a>

			<a href="#">
				<GooglePlusIcon />
			</a>

			<a href="#">
				<InstagramIcon />
			</a>
		</menu>
	);
};
