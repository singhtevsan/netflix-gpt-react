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

const ShowsContainer = () => {

    const trending = useSelector((store) => store?.shows?.nowPlayingShows);
    const upcoming = useSelector((store) => store?.shows?.upcomingShows);

    return (
        <div className="w-full bg-gradient-to-tr from-black -mt-8">

            { trending && <MoviesList list={trending} title={"Trending Shows"} /> }
            { upcoming && <MoviesList list={upcoming} title={"Upcoming Shows"} />}
            
        </div>
    )
};

export default ShowsContainer;