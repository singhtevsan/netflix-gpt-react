/* 
    MovieList or ShowsList
        - Trending
            - Cards
        - Popular
            - Cards
        - Genre
            - Cards
        - Horror
*/

import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const MoviesContainer = () => {

    const trending = useSelector((store) => store?.movies?.nowPlayingMovies);
    const upcoming = useSelector((store) => store?.movies?.upcomingMovies);

    return (
        <div className="w-full bg-gradient-to-tr from-black -mt-8">
            { trending && <MoviesList list={trending} title={"Trending Movies"} />}
            { upcoming && <MoviesList list={upcoming} title={"Upcoming Movies"} />}
            
        </div>
    )
};

export default MoviesContainer;