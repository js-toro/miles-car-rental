import {
	LabelIcon,
	LabelSpan,
	PickupAndReturnContainer,
	PickupLabel,
	ReturnLabel,
} from '../../styles';

import PickupSVG from 'src/assets/icons/car-pickup.svg?react';
import ReturnSVG from 'src/assets/icons/car-return.svg?react';

type PickupAndReturnProps = {
	hasReturn: boolean;
};

export const PickupAndReturn: React.FC<PickupAndReturnProps> = ({
	hasReturn,
}) => {
	return (
		<PickupAndReturnContainer>
			<PickupLabel $hasReturn={hasReturn}>
				<LabelIcon>
					<PickupSVG />
				</LabelIcon>

				<LabelSpan>Localidad de Retiro</LabelSpan>
				<input
					id="pickupLocation"
					name="pickupLocation"
					type="text"
					placeholder="Ciudad, Aeropuerto o Localidad"
					// TODO: Almacenar value en el estado
				/>
			</PickupLabel>

			<ReturnLabel $hasReturn={hasReturn}>
				<LabelIcon>
					<ReturnSVG />
				</LabelIcon>

				<LabelSpan>Localidad de de Devolución</LabelSpan>
				<input
					id="returnLocation"
					name="returnLocation"
					type="text"
					placeholder="Ciudad, Aeropuerto o Localidad"
					// TODO: Almacenar value en el estado
				/>
			</ReturnLabel>
		</PickupAndReturnContainer>
	);
};
