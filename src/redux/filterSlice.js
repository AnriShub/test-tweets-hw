import { createSlice } from "@reduxjs/toolkit";
import { filters } from "./constants";

const filtersInitialState = {
    status: filters.showAll,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setFilter(state, { payload }) {
            state.status = payload;
        },
    },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export default filtersSlice.reducer;