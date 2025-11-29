import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        moviesGenre: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addMoviesGenre: (state, action) => {
            state.moviesGenre = action.payload;
        }
    }

});

export const { addNowPlayingMovies, addUpcomingMovies, 
        addPopularMovies, addTopRatedMovies, addMoviesGenre } = movieSlice.actions;
export default movieSlice.reducer;