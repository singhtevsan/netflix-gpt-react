import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingShows } from "../utils/showsSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useNowPlayingShows = () => {

    // fetching the data of now playing shows from TMDB API and adding to the store
    const dispatch = useDispatch();

    const getNowPlayingShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', TMDB_API_OPTIONS);
        const json = await data.json();

        dispatch(addNowPlayingShows(json?.results));
    }

    useEffect( ()=>{
        getNowPlayingShows();
    }, []);

};

export default useNowPlayingShows;