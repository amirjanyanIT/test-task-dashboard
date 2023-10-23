import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer, reportsReducer } from "./slices";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: combineReducers({
    users: usersReducer, 
    reports: reportsReducer
  }),
});