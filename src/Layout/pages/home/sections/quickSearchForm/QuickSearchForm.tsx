/**
 * @file QuickSearchForm.tsx
 *
 * Componente que renderiza el formulario de búsqueda rápida de la aplicación.
 */

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { SwitchButton } from 'src/components';
import { useTheme } from 'styled-components';

import {
	FormContainer,
	Heading,
	PickupAndReturnContainer,
	PickupLabel,
	ReturnLabel,
	SwitchReturnContainer,
	DatePickersContainer,
	DatePickerLabel,
	DatePickerWrapper,
	SubmitButtonContainer,
	SubmitButton,
	SearchIcon,
	Background,
	LabelIcon,
	LabelSpan,
} from './styles';
import { date, formatDate } from './utilities';

import PickupSVG from 'src/assets/icons/car-pickup.svg?react';
import ReturnSVG from 'src/assets/icons/car-return.svg?react';
import CalendarPickupSVG from 'src/assets/icons/calendar-pickup.svg?react';
import CalendarReturnSVG from 'src/assets/icons/calendar-return.svg?react';
import SearchSVG from 'src/assets/icons/search.svg?react';
import background from 'src/assets/designs/background-qs.svg';
import { useMediaQuery } from 'src/hooks';

export const QuickSearchForm: React.FC = () => {
	// TODO: Hacer validación de formulario

	const [hasReturn, setHasReturn] = useState(false);

	const handleReturnToggle = () => {
		setHasReturn(!hasReturn);
	};

	const [startDate, setStartDate] = useState(date.today);
	const [endDate, setEndDate] = useState(date.upcoming(5));

	const breakpoint = useTheme().breakpoints.tablet.large;
	const isMobile = useMediaQuery(breakpoint);
	const amountOfMonths = isMobile ? 1 : 2;

	return (
		<FormContainer action="/search">
			<Heading>Alquiler de Carros Miami</Heading>

			<PickupAndReturnContainer>
				<PickupLabel $hasReturn={hasReturn}>
					<LabelIcon>
						<PickupSVG />
					</LabelIcon>

					<LabelSpan>Localidad de Retiro</LabelSpan>
					<input placeholder="Ciudad, Aeropuerto o Localidad" />
				</PickupLabel>

				<ReturnLabel $hasReturn={hasReturn}>
					<LabelIcon>
						<ReturnSVG />
					</LabelIcon>

					<LabelSpan>Localidad de de Devolución</LabelSpan>
					<input placeholder="Ciudad, Aeropuerto o Localidad" />
				</ReturnLabel>
			</PickupAndReturnContainer>

			<SwitchReturnContainer onClick={handleReturnToggle}>
				<SwitchButton isActive={hasReturn} />
				<span>lo quiero devolver en otra localidad</span>
			</SwitchReturnContainer>

			<DatePickersContainer>
				<DatePickerLabel>
					<LabelIcon>
						<CalendarPickupSVG />
					</LabelIcon>

					<LabelSpan>Recogida</LabelSpan>
					<DatePickerWrapper>
						<DatePicker
							selected={startDate}
							value={formatDate(startDate)}
							onChange={(dates: any) => {
								const [start, end] = dates;

								setStartDate(start);
								setEndDate(end);
							}}
							startDate={startDate}
							endDate={endDate}
							minDate={date.today}
							selectsRange
							monthsShown={amountOfMonths}
							withPortal={isMobile}
							fixedHeight
							locale="es"
						/>
					</DatePickerWrapper>
				</DatePickerLabel>

				<DatePickerLabel>
					<LabelIcon>
						<CalendarReturnSVG />
					</LabelIcon>

					<LabelSpan>Devolución</LabelSpan>
					<DatePickerWrapper>
						<DatePicker
							selected={endDate}
							value={formatDate(endDate ? endDate : startDate)}
							onChange={(date: Date) => {
								setEndDate(date);
							}}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
							monthsShown={amountOfMonths}
							withPortal={isMobile}
							fixedHeight
							locale="es"
						/>
					</DatePickerWrapper>
				</DatePickerLabel>
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
