import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularShows } from "../utils/showsSlice";
import { useEffect } from "react";

const usePopularShows = () => {

    // fetching the data of popular shows from TMDB API and adding to the store
    const dispatch = useDispatch();

    const getPopularShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', TMDB_API_OPTIONS);
        const json = await data.json();

        dispatch(addPopularShows(json?.results));
    }

    useEffect(()=>{
        getPopularShows();
    }, []);
};

export default usePopularShows;