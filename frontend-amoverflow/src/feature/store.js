
import { configureStore } from "@reduxjs/toolkit";
// import themeSliceReducer from "../feature/themeSlice"; // If you use it
import { apiSlice } from "./apiSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";

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