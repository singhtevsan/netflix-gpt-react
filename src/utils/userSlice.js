import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state,action) => {
            state.initialState = action.payload;
        },
        removeUser: (state) => {
            state.initialState = null;
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;