import { useState } from 'react';
import { SwitchButton } from 'src/components';

import {
	FormContainer,
	Heading,
	PickupAndReturnContainer,
	PickupLabel,
	ReturnLabel,
	SwitchReturnContainer,
	SwitchReturnText,
	DatePickersContainer,
	SubmitButton,
	Background,
	DateLabel,
} from './styles';

import PickupSVG from 'src/assets/icons/car-pickup.svg?react';
import ReturnSVG from 'src/assets/icons/car-return.svg?react';
import CalendarPickupSVG from 'src/assets/icons/calendar-pickup.svg?react';
import CalendarReturnSVG from 'src/assets/icons/calendar-return.svg?react';
import SearchSVG from 'src/assets/icons/search.svg?react';
import background from 'src/assets/designs/background-qs.svg';

export const QuickSearchForm: React.FC = () => {
	const [hasReturn, setHasReturn] = useState(false);

	const handleReturnToggle = () => {
		setHasReturn(!hasReturn);
	};

	return (
		<FormContainer action="/search">
			<Heading>Alquiler de Carros Miami</Heading>

			<PickupAndReturnContainer>
				<PickupLabel $hasReturn={hasReturn}>
					<i>
						<PickupSVG />
					</i>

					<span>Localidad de Retiro</span>
					<input value="Ciudad, Aeropuerto o Localidad" onChange={() => {}} />
				</PickupLabel>

				<ReturnLabel $hasReturn={hasReturn}>
					<i>
						<ReturnSVG />
					</i>

					<span>Localidad de de Devolución</span>
					<input value="Ciudad, Aeropuerto o Localidad" onChange={() => {}} />
				</ReturnLabel>
			</PickupAndReturnContainer>

			<SwitchReturnContainer onClick={handleReturnToggle}>
				<SwitchButton isActive={hasReturn} />
				<SwitchReturnText>
					lo quiero devolver en otra localidad
				</SwitchReturnText>
			</SwitchReturnContainer>

			<DatePickersContainer>
				<DateLabel>
					<i>
						<CalendarPickupSVG />
					</i>

					<span>Recogida</span>
					<input value="2 Jul" onChange={() => {}} />
				</DateLabel>

				<DateLabel>
					<i>
						<CalendarReturnSVG />
					</i>

					<span>Devolución</span>
					<input value="5 Jul" onChange={() => {}} />
				</DateLabel>
			</DatePickersContainer>

			<SubmitButton>
				<i>
					<SearchSVG />
				</i>
			</SubmitButton>

			<Background>
				<img src={background} alt="Imagen background del buscador rápido" />
			</Background>
		</FormContainer>
	);
};
