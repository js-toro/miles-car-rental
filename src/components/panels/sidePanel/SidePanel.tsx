import { Content } from './styles';

type SidePanelProps = {
	children: React.ReactNode;
	isPanelOpen?: boolean;
};

/**
 * Componente que muestra un panel lateral
 * @param {React.ReactNode} children - Elementos que se mostrarán en el panel
 * @param {boolean} isPanelOpen - Indica si el panel está abierto
 */
export const SidePanel: React.FC<SidePanelProps> = ({
	isPanelOpen = false,
	children,
}) => {
	return <Content $isPanelOpen={isPanelOpen}>{children}</Content>;
};
