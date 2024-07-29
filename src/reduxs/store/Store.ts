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

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, CreateProductSlice);

export const ReduxStore = configureStore({
    reducer: {
        "persistedProduct": persistedReducer
    },
    middleware: (getDefaultMiddlewars) => getDefaultMiddlewars({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

export const persistor = persistStore(ReduxStore);

export type AppRoot = ReturnType<typeof ReduxStore.getState>;


