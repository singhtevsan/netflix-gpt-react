import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MoviesContainer from "./MoviesContainer";
import TrailerContainer from "./TrailerContainer";


/*
    Trailer Container
        - Video in background
        - Video title and discription
    Movies Container
        - Movie lists
            - Movie Cards
        - Series lists
            - Series Cards
*/

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <TrailerContainer />
            <MoviesContainer />
        </div>
    )
};

export default Browse;