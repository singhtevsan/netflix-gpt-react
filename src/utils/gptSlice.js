import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptMovies: null
    },
    reducers: {
        addGptMovies: (state, action) => {
            state.gptMovies = action.payload;
        }
    }

});

export const {addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;