import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

// If you have additional reducers, you can uncomment and type them accordingly
// import themeSliceReducer from "../feature/themeSlice"; // If you use it

export const store = configureStore({
  reducer: {
    // theme: themeSliceReducer, 
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Adding the API middleware
  devTools: true, // Enable Redux DevTools
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
