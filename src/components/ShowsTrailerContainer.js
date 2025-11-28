import { useSelector } from "react-redux";
import TrailerTitle from "./TrailerTitle";
import TrailerVideo from "./TrailerVideo";

const ShowsTrailerContainer = () => {

    const shows = useSelector((store) => store?.shows?.nowPlayingShows);

    // early return
    if(!shows) return;

    const mainShow = shows[ Math.floor(Math.random() * shows.length)];
    
    return (
        <div className="h-[80vh] flex items-center">
            <TrailerTitle title={mainShow?.name} overview={mainShow?.overview } />
            <TrailerVideo movieId={mainShow?.id} page={1} />
        </div>
    )
};

export default ShowsTrailerContainer;