import { createSlice } from "@reduxjs/toolkit";

const changeViewSlice = createSlice({
    name: "view",
    initialState:{
        page:0
    },
    reducers: {
        toggleView: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { toggleView } = changeViewSlice.actions;
export default changeViewSlice.reducer;