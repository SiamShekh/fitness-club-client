import { createSlice } from "@reduxjs/toolkit";

const CartsShowSlice = createSlice({
    name: 'Carts',
    initialState: {
        show_carts: false,
    },
    reducers: {
        carts: (state, args) => {
            state.show_carts = args.payload
        }
    }
});

export default CartsShowSlice;
export const { carts } = CartsShowSlice.actions;