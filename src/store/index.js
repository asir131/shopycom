import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from './reducers/cart';
// import {todoSlice } from './reducers/todo';
import { appApi } from './features/apiSlice';
const rootReducer = {
	cart: cartReducer,
    // todoState: todoSlice.reducer,
	[appApi.reducerPath]:appApi.reducer,
	
}

export const store = configureStore({
	reducer:rootReducer,
	middleware: (gM) => gM().concat(appApi.middleware),
});
