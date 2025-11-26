import useNowPlayingMovies from "../hooks/useNowPlayingMovies";


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
            Browse Page
        </div>
    )
};

export default Browse;