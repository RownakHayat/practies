import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../fetures/apislice";
import authSlice from '../fetures/auth/index';
export const rootReducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
});
