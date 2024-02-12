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
	SwitchReturnContainer,
	SubmitButtonContainer,
	SubmitButton,
	SearchIcon,
	Background,
} from './styles';

import SearchSVG from 'src/assets/icons/search.svg?react';
import background from 'src/assets/designs/background-qs.svg';

import { DatePickers, PickupAndReturn } from './components';

export const QuickSearchForm: React.FC = () => {
	const [hasReturn, setHasReturn] = useState(false);

	return (
		<FormContainer action="/search">
			<Heading>Alquiler de Carros Miami</Heading>
			<PickupAndReturn hasReturn={hasReturn} />

			<SwitchReturnContainer onClick={() => setHasReturn(!hasReturn)}>
				<SwitchButton isActive={hasReturn} />
				<span>lo quiero devolver en otra localidad</span>
			</SwitchReturnContainer>

			<DatePickers />

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
