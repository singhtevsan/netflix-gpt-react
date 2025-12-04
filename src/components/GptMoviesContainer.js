import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesContainer = () => {

    const movies = useSelector((store)=>store?.gpt?.gptMovies);

    return (
        <div className="h-[50vh] bg-gradient-to-b from-black " >
            {
                !movies && <div className=" text-white p-20 text-center">
                    <h1 className="font-bold text-6xl">No Content Available !!</h1>
                    <h2 className="text-4xl my-2">Try to provide some interesting query.</h2>
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