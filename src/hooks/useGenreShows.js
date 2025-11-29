import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addShowsGenre } from "../utils/showsSlice";

const useGenreShows = () => {

    // fetching the data of shows genre from TMDB API and adding to the store
    const dispatch = useDispatch()

    const getShowsGenre = async () => {
        const data = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addShowsGenre(json?.genres));
    };

    useEffect(()=>{
        getShowsGenre();
    });
};

export default useGenreShows;