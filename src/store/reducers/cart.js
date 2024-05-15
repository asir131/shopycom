import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart(state, action) {
			const product = state.find((item) => item.id === action.payload.id);
			product
				? (product.quantity += 1)
				: state.push({ ...action.payload, quantity: 1 });
		},

		removeFromCart(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
		modifyQuantityOfAnItem(state, action) {
			const productIndex = state.findIndex(
				(item) => item.id === action.payload.id,
			);
			state[productIndex].quantity = action.payload.quantity;
		},
		clearCart() {
			return [];
		},
	},
});

export const { addToCart, removeFromCart, modifyQuantityOfAnItem, clearCart } =
	cartSlice.actions;
addToCart();
export default cartSlice.reducer;