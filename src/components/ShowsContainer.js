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

const ShowsContainer = () => {

    const trending = useSelector((store) => store?.shows?.nowPlayingShows);
    const upcoming = useSelector((store) => store?.shows?.upcomingShows);
    const popular = useSelector((store) => store?.shows?.popularShows);
    const rated = useSelector((store) => store?.shows?.topRatedShows);
    const genre = useSelector((store) => store?.shows?.showsGenre);

    return (
        <div className="w-full bg-gradient-to-r from-black -mt-8">

            { trending && <MoviesList list={trending} title={"Trending Shows"} /> }
            { genre && <GenreList list={genre} title={"Shows Genre"} />}
            { upcoming && <MoviesList list={upcoming} title={"Upcoming Shows"} />}
            { popular && <MoviesList list={popular} title={"Popular Shows"} />}
            { rated && <MoviesList list={rated} title={"Top Rated Shows"} />}
        </div>
    )
};

export default ShowsContainer;