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

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, CreateProductSlice);

export const ReduxStore = configureStore({
    reducer: {
        "persistedProduct": persistedReducer,
        [BaseApi.reducerPath]: BaseApi.reducer
    },
    middleware: (getDefaultMiddlewars) => getDefaultMiddlewars({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(BaseApi.middleware)
});

export const persistor = persistStore(ReduxStore);

export type AppRoot = ReturnType<typeof ReduxStore.getState>;


