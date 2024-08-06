import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import CreateProductSlice from "../slice/CreateProductSlice";
import { BaseApi } from "../api/BaseApi";
import CartsShowSlice from "../slice/CartsShowSlice";
import CartsSlice from "../slice/CartsSlice";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, CreateProductSlice);
const persistedCart = persistReducer(persistConfig, CartsSlice.reducer);
export const ReduxStore = configureStore({
    reducer: {
        "persistedProduct": persistedReducer,
        [BaseApi.reducerPath]: BaseApi.reducer,
        'Carts': CartsShowSlice.reducer,
        "persistedCart": persistedCart,
    },
    middleware: (getDefaultMiddlewars) => getDefaultMiddlewars({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(BaseApi.middleware)
});

export const persistor = persistStore(ReduxStore);

export type AppRoot = ReturnType<typeof ReduxStore.getState>;


