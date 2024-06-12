import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getScrapedData: (state, action) => {
            state.data = action.payload;
        },
        createScrapedData: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        deleteScrapedData: (state, action) => {
            const data = action.payload;
            data.forEach((info) => {
                state.data = state.data.filter((item) => item._id !== info._id);
            });
        },
    },
});

export const { getScrapedData, createScrapedData, deleteScrapedData } =
    homeSlice.actions;

export default homeSlice.reducer;
