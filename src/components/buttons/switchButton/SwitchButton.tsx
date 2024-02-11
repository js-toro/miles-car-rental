import { StyledButton } from './styles';

type SwitchButtonProps = {
	onClick?: () => void;
	isActive: boolean;
};

export const SwitchButton: React.FC<SwitchButtonProps> = ({
	isActive,
	onClick,
}) => {
	return <StyledButton $isActive={isActive} onClick={onClick} />;
};
