import { useDispatch } from "react-redux";
import { addMoviesGenre } from "../utils/movieSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useGenreMovies = () => {

    // fetching the data of movies genre from TMDB API and adding to the store
    const dispatch = useDispatch()

    const getMoviesGenre = async () => {
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addMoviesGenre(json?.genres));
    };

    useEffect(()=>{
        getMoviesGenre();
    });
};

export default useGenreMovies;