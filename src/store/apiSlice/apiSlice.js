import { baseAPIURL } from "../../constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// A default base query
const baseQuery = fetchBaseQuery({
    baseUrl: baseAPIURL,
});

// A RTK Query API slice with the custom base query for handling reauthentication
export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
});
