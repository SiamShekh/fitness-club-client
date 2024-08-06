/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const CartsSlice = createSlice({
    name: 'CartSlice',
    initialState: {
        cart: []
    },
    reducers: {
        CreateNewCart: (state: any, action: any) => {
            const filterProducts = state.cart.find((item: any) => item?._id === action.payload._id);
            if (filterProducts) {
                const subtotal = (action.payload.price * action.payload.Quantity) + filterProducts.price;
                filterProducts.quantity += action.payload.Quantity;
                filterProducts.price = Number(subtotal);
            } else {
                const subtotal = (action.payload.price * action.payload.Quantity);
                state.cart.push({
                    _id: action.payload._id,
                    name: action.payload.name,
                    price: subtotal,
                    quantity: action.payload.Quantity,
                    thumbnails: action.payload.thumnail
                })
            }
        },
        RemoveSingleCarts: (state: any, action: any) => {
            const filter = state.cart.filter((item: any) => item._id !== action.payload);
            state.cart = filter;
        }
    }
});

export default CartsSlice;
export const { CreateNewCart, RemoveSingleCarts } = CartsSlice.actions;