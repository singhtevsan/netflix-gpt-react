import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
    name:"shows",
    initialState: {
        nowPlayingShows: null,
        upcomingShows: null
    },
    reducers: {
        addNowPlayingShows: (state, action) => {
            state.nowPlayingShows = action.payload;
        },
        addUpcomingShows: (state, action) => {
            state.upcomingShows = action.payload;
        }
    }
});

export const { addNowPlayingShows, addUpcomingShows } = showsSlice.actions;
export default showsSlice.reducer;