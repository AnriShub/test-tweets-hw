import { createSlice } from '@reduxjs/toolkit';
import { cardsApi } from './cardsApi';

const cardsInitialState = {
    users: null,
    isFollowingIDs: [],
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState: cardsInitialState,
    reducers: {
        addFollowing(state, { payload }) {
            state.isFollowingIDs.push(payload);
        },
        deleteFollowing(state, action) {
            const index = state.isFollowingIDs.indexOf(action.payload);
            state.isFollowingIDs.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                cardsApi.endpoints.fetchCards.matchFulfilled,
                (state, { payload }) => {
                    state.users = payload;
                }
            )
    },
})

export default cardsSlice.reducer
export const cardsReducer = cardsSlice.reducer;

export const { addFollowing, deleteFollowing, pageReload } = cardsSlice.actions;

