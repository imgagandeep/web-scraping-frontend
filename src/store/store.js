import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice/apiSlice";
// import homeReducer from "./slice/homeSlice";
import homeSlice from "./slice/homeSlice";

export const store = configureStore({
    // Middleware Setup.
    middleware: (getDefaultMiddleware) =>
        // Start with the default middleware provided by Redux Toolkit.
        getDefaultMiddleware()
            // Add the middleware from the apiSlice for handling async actions and side effects.
            .concat(apiSlice.middleware),

    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        home: homeSlice,
    },
});
