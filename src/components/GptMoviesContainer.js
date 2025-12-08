import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesContainer = () => {

    const movies = useSelector((store)=>store?.gpt?.gptMovies);

    return (
        <div>
            {
                !movies && <div className=" text-white p-20 text-center">
                    <h1 className="font-bold text-6xl">Loading........... !!</h1>
                </div> 
            }
            {
                movies && <div>
                    <h1 className="text-white font-bold text-center">Showing Results</h1>
                    <MoviesList list={movies} title={''} />
                </div> 
            }
        </div>
    )
};

export default GptMoviesContainer;