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
import GenreList from "./GenreList";

const MoviesContainer = () => {

    const trending = useSelector((store) => store?.movies?.nowPlayingMovies);
    const upcoming = useSelector((store) => store?.movies?.upcomingMovies);
    const popular = useSelector((store) => store?.movies?.popularMovies);
    const rated = useSelector((store) => store?.movies?.topRatedMovies)
    const genre = useSelector((store) => store?.movies?.moviesGenre);

    return (
        <div className="w-full bg-gradient-to-r from-black -mt-8">
            { trending && <MoviesList list={trending} title={"Trending Movies"} />}
            { genre && <GenreList list={genre} title={"Movies Genre"} />}
            { upcoming && <MoviesList list={upcoming} title={"Upcoming Movies"} />}
            { popular && <MoviesList list={popular} title={"Popular Movies"} />}
            { rated && <MoviesList list={rated} title={"Top Rated Movies"} />}
        </div>
    )
};

export default MoviesContainer;