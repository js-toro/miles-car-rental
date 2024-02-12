import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'src/hooks';
import DatePicker from 'react-datepicker';

import {
	DatePickerLabel,
	DatePickersContainer,
	LabelIcon,
	LabelSpan,
} from '../../styles';

import CalendarPickupSVG from 'src/assets/icons/calendar-pickup.svg?react';
import CalendarReturnSVG from 'src/assets/icons/calendar-return.svg?react';

import { date, formatDate } from './utilities';

export const DatePickers: React.FC = () => {
	const [startDate, setStartDate] = useState(date.today);
	const [endDate, setEndDate] = useState(date.upcoming(5));

	const breakpoint = useTheme().breakpoints.tablet.large;
	const isMobile = useMediaQuery(breakpoint);
	const amountOfMonths = isMobile ? 1 : 2;

	return (
		<DatePickersContainer>
			<DatePickerLabel>
				<LabelIcon>
					<CalendarPickupSVG />
				</LabelIcon>

				<LabelSpan>Recogida</LabelSpan>
				<DatePicker
					selected={startDate}
					value={formatDate(startDate)}
					onChange={(dates: any) => {
						const [start, end] = dates;

						setStartDate(start);
						setEndDate(end);
					}}
					onCalendarClose={() => {
						if (!endDate) {
							setEndDate(startDate);
						}
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
			</DatePickerLabel>

			<DatePickerLabel>
				<LabelIcon>
					<CalendarReturnSVG />
				</LabelIcon>

				<LabelSpan>Devolución</LabelSpan>
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
			</DatePickerLabel>
		</DatePickersContainer>
	);
};
