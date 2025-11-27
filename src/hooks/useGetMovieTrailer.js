import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetMovieTrailer = (id) => {

    // Fetching the trialer using id and then putting on store and returning the youtube key
    const trailerVideo = useSelector( (store) => store?.movies?.trailerVideo);
    
    const dispatch = useDispatch();

    const getTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', TMDB_API_OPTIONS);
        const json = await data.json();
        
        const videos = json?.results.filter( (video) => (video?.type==="Trailer" || video?.type==="Teaser") );
        const trailer = videos[Math.floor(Math.random() * videos.length)];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getTrailer();
    }, []);

    return trailerVideo?.key;
};

export default useGetMovieTrailer;