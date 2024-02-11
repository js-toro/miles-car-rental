import { configureStore } from '@reduxjs/toolkit';
import { themeReducer, panelReducer } from './reducers';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		panel: panelReducer,
	},
});
