import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addUpcomingShows } from "../utils/showsSlice";
import { useEffect } from "react";

const useUpcomingShows = () => {

    // fetching the data of upcoming shows from TMDB API and adding to the store
    const dispatch = useDispatch();

    const getUpcomingShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', TMDB_API_OPTIONS);
        const json = await data.json();

        dispatch(addUpcomingShows(json?.results));
    };

    useEffect(()=>{
        getUpcomingShows();
    }, []);
};

export default useUpcomingShows;