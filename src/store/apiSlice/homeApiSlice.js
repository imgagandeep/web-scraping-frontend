import { apiSlice } from "./apiSlice";
import {
    getScrapedData,
    createScrapedData,
    deleteScrapedData,
} from "../slice/homeSlice";

export const homeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getScrapedData: builder.query({
            query: (id) => (id ? `/api/v1/scrape/${id}` : "/api/v1/scrape"),
            onQueryStarted: (_, { dispatch, queryFulfilled }) => {
                queryFulfilled
                    .then((result) =>
                        dispatch(getScrapedData(result.data.data))
                    )
                    .catch((error) => {});
            },
        }),
        createScrapedData: builder.mutation({
            query: (data) => ({
                url: "/api/v1/scrape/create",
                method: "post",
                body: data,
            }),
            onQueryStarted: (_, { dispatch, queryFulfilled }) => {
                queryFulfilled
                    .then((result) =>
                        dispatch(createScrapedData(result.data.data))
                    )
                    .catch((error) => {});
            },
        }),
        deleteScrapedData: builder.mutation({
            query: (data) => ({
                url: "/api/v1/scrape/delete",
                method: "post",
                body: data,
            }),
            onQueryStarted: (_, { dispatch, queryFulfilled }) => {
                queryFulfilled
                    .then((result) =>
                        dispatch(deleteScrapedData(result.data.data))
                    )
                    .catch((error) => {});
            },
        }),
    }),
});

export const {
    useGetScrapedDataQuery,
    useCreateScrapedDataMutation,
    useDeleteScrapedDataMutation,
} = homeApiSlice;
