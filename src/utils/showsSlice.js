import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
    name:"shows",
    initialState: {
        nowPlayingShows: null
    },
    reducers: {
        addNowPlayingShows: (state, action) => {
            state.nowPlayingShows = action.payload;
        }
    }
});

export const {addNowPlayingShows} = showsSlice.actions;
export default showsSlice.reducer;