import { configureStore } from "@reduxjs/toolkit";
import airportReducer from "./apiSlice";
import { flightsApi } from "./flightSlice";
// Define your store type
export const store = configureStore({
  reducer: {
    airport: airportReducer,
    [flightsApi.reducerPath]: flightsApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(flightsApi.middleware),
});

// Define RootState type for usage in selectors or throughout your app
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for dispatch usage
export type AppDispatch = typeof store.dispatch;
