import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import showsReducer from "./showsSlice";
import trailerReducer from "./trailerSlice";
import viewReducer from "./changeViewSlice";

const appStore = configureStore({

    reducer: {
        user: userReducer,
        movies: moviesReducer,
        shows: showsReducer,
        trailer: trailerReducer,
        view: viewReducer
    }
});

export default appStore;