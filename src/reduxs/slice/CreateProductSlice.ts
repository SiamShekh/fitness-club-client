import { createSlice } from "@reduxjs/toolkit";

const ReduxCreateProductSlice = createSlice({
    name: 'Product',
    initialState: {
        "name": "",
        "price": "",
        "category": "",
        "description": "",
        "discount": "",
        "stock": 0,
        "thumnail": "",
        "image": [""]
    },
    reducers: {
        createProducts: (state, action) => {
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.category = action.payload.category;
            state.description = action.payload.description;
            state.discount = action.payload.discount;
            state.stock = action.payload.stock;
            state.thumnail = action.payload.thumnail;
            state.image = action.payload.image;
        }
    }
});

export default ReduxCreateProductSlice.reducer;
export const { createProducts } = ReduxCreateProductSlice.actions;