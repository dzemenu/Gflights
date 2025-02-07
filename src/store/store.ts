import { configureStore } from "@reduxjs/toolkit";
import airportReducer from "./apiSlice";
import { flightsApi } from "./flightSlice";
export const store = configureStore({
  reducer: {
    airport: airportReducer,
    [flightsApi.reducerPath]: flightsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
