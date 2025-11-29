import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTopRatedShows } from "../utils/showsSlice";
import { useEffect } from "react";

const useTopRatedShows = () => {

    // fetching the data of top rated shows from TMDB API and adding to the store
    const dispatch = useDispatch();

    const getTopRatedShows = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', TMDB_API_OPTIONS);
        const json = await data.json();

        dispatch(addTopRatedShows(json?.results));
    };

    useEffect(()=>{
        getTopRatedShows();
    }, []);
};

export default useTopRatedShows;