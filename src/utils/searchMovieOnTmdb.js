import { TMDB_API_OPTIONS } from "./constants"

const searchMovieOnTmdb = (name) => {
    
    const fetchMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+name+'&include_adult=false&page=1', TMDB_API_OPTIONS);
        const json = await data.json();
        return json?.results
    };
    return fetchMovies();
};

export default searchMovieOnTmdb;