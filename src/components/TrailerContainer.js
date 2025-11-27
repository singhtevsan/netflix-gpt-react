import { useSelector } from "react-redux";
import TrailerVideo from "./TrailerVideo";
import TrailerTitle from "./TrailerTitle";

const TrailerContainer = () => {

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

    // early return
    if(!movies) return;

    const mainMovie = movies[ Math.floor(Math.random() * movies.length)];
    
    return (
        <div className="h-[80vh] flex items-center">
            <TrailerTitle title={mainMovie?.title} overview={mainMovie?.overview } />
            <TrailerVideo movieId={mainMovie?.id} />
        </div>
    )
};

export default TrailerContainer;