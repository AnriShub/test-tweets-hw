import { createSlice } from '@reduxjs/toolkit';

const pageInitialState = {
    page: 1,
    limit: 3,
};

const pageSlice = createSlice({
    name: "pages",
    initialState: pageInitialState,
    reducers: {
        setPage(state, { payload }) {
            state.page = payload;
        },
    },
});

export default pageSlice.reducer
export const pageReducer = pageSlice.reducer;
export const { setPage } = pageSlice.actions;

