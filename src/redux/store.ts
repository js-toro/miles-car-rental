import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from './reducers';

export const store = configureStore({
	reducer: {
		menu: menuReducer,
	},
});
