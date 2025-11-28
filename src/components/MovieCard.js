import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
    const {movie} = props;
    
    return(
        <div className="w-48 mx-1">
            <img className="rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer"
            src={IMG_CDN_URL + movie?.poster_path} alt={movie?.title} />
        </div>
    )
};

export default MovieCard;