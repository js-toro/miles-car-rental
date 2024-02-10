import { configureStore } from '@reduxjs/toolkit';
import { panelReducer } from './reducers';

export const store = configureStore({
	reducer: {
		panel: panelReducer,
	},
});
