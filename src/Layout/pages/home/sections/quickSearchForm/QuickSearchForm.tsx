/**
 * @file QuickSearchForm.tsx
 *
 * Componente que renderiza el formulario de búsqueda rápida de la aplicación.
 */

import { useState } from 'react';
import { SwitchButton } from 'src/components';

import {
	FormContainer,
	Heading,
	PickupAndReturnContainer,
	PickupLabel,
	ReturnLabel,
	SwitchReturnContainer,
	DatePickersContainer,
	DateLabel,
	SubmitButtonContainer,
	SubmitButton,
	SearchIcon,
	Background,
	LabelIcon,
	LabelSpan,
	LabelInput,
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
					<LabelIcon>
						<PickupSVG />
					</LabelIcon>

					<LabelSpan>Localidad de Retiro</LabelSpan>
					<LabelInput
						value="Ciudad, Aeropuerto o Localidad"
						onChange={() => {}}
					/>
				</PickupLabel>

				<ReturnLabel $hasReturn={hasReturn}>
					<LabelIcon>
						<ReturnSVG />
					</LabelIcon>

					<LabelSpan>Localidad de de Devolución</LabelSpan>
					<LabelInput
						value="Ciudad, Aeropuerto o Localidad"
						onChange={() => {}}
					/>
				</ReturnLabel>
			</PickupAndReturnContainer>

			<SwitchReturnContainer onClick={handleReturnToggle}>
				<SwitchButton isActive={hasReturn} />
				<span>lo quiero devolver en otra localidad</span>
			</SwitchReturnContainer>

			<DatePickersContainer>
				<DateLabel>
					<LabelIcon>
						<CalendarPickupSVG />
					</LabelIcon>

					<LabelSpan>Recogida</LabelSpan>
					<LabelInput value="2 Jul" onChange={() => {}} />
				</DateLabel>

				<DateLabel>
					<LabelIcon>
						<CalendarReturnSVG />
					</LabelIcon>

					<LabelSpan>Devolución</LabelSpan>
					<LabelInput value="5 Jul" onChange={() => {}} />
				</DateLabel>
			</DatePickersContainer>

			<SubmitButtonContainer>
				<SubmitButton>
					<SearchIcon>
						<SearchSVG />
					</SearchIcon>
				</SubmitButton>
			</SubmitButtonContainer>

			<Background>
				<img
					src={background}
					alt="Imagen background del buscador rápido"
					loading="lazy"
				/>
			</Background>
		</FormContainer>
	);
};
