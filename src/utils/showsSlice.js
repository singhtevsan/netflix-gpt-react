import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
    name:"shows",
    initialState: {
        nowPlayingShows: null,
        upcomingShows: null,
        popularShows: null,
        topRatedShows: null,
        showsGenre: null
    },
    reducers: {
        addNowPlayingShows: (state, action) => {
            state.nowPlayingShows = action.payload;
        },
        addUpcomingShows: (state, action) => {
            state.upcomingShows = action.payload;
        },
        addPopularShows: (state, action) => {
            state.popularShows = action.payload;
        },
        addTopRatedShows: (state, action) => {
            state.topRatedShows = action.payload;
        },
        addShowsGenre: (state, action) => {
            state.showsGenre = action.payload;
        }
    }
});

export const { addNowPlayingShows, addUpcomingShows, 
        addPopularShows, addTopRatedShows, addShowsGenre } = showsSlice.actions;
export default showsSlice.reducer;