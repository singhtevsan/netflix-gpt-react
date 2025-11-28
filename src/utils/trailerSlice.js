import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
    name: 'trailer',
    initialState: {
        trailerVideo: null
    },
    reducers: {
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const {addTrailerVideo} = trailerSlice.actions;
export default trailerSlice.reducer;