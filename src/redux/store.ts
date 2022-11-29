import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import { reducer } from './reducers';

export const appStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
});

export type AppDispatch = typeof appStore.dispatch;