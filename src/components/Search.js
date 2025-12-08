import { useRef, useState } from "react";
import openai from "../utils/openAi";
import searchMovieOnTmdb from "../utils/searchMovieOnTmdb";
import filterTmdbMovies from "../utils/filterTmdbMovies";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import GptMoviesContainer from "./GptMoviesContainer";

const Search = () => {

    const input = useRef(null);
    const dispatch = useDispatch();
    const [message, setMessage] = useState(false);

    const handleSearchForm = async () => {

        setMessage(true);

        // make an api call on the openAi and get movies result
        const gptQuery = 
            "Act as a Movie Recommendation system and suggest some movies for the query : " + input.current.value
            +". only give me names of 10 movies, comma seperated like the example result given ahead "
            +"Example Result: Cars, Sholay, The Avengers, Golmaal, Ironman"
        ;

        const gptSearchResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-4.1-nano",
        });

        // ["Chashme Buddoor", "Hera Pheri", "Jaane Bhi Do Yaaro", "Andaz Apna Apna", "Golmaal Returns"]
        const gptSuggestedNames = gptSearchResults.choices?.[0]?.message?.content.split(",").map(s=>s.trim());

        // calling search movies on tmdb it will return promise array
        const promiseArray = gptSuggestedNames.map((name)=>searchMovieOnTmdb(name));
        const allTmdbMovies = await Promise.all(promiseArray);
        
        // filter the required movies from all returned tmdb movies and put it on store
        const actualMovies = filterTmdbMovies(allTmdbMovies,gptSuggestedNames);
        dispatch(addGptMovies(actualMovies));

    };

    return(
        <div>
            <div className="h-[50vh] bg-sky-800 flex justify-center items-center">
                <form onSubmit={
                    (event)=>{
                        event.preventDefault();
                        handleSearchForm();
                    }
                } className="text-center w-[50%] p-6">
                    <h1 className="text-white text-6xl font-bold my-4">GPT Search</h1>
                    <input ref={input} className="text-center text-lg w-full h-12 p-2 rounded-full border-black border-2 focus:outline-none" type="text" placeholder="What would you like to watch" />
                </form>
            </div>
            <div className="h-[50vh] bg-gradient-to-b from-black ">
                {
                    !message ? 
                    <div className=" text-white p-20 text-center">
                        <h1 className="font-bold text-6xl">No Content Available !!</h1>
                        <h2 className="text-4xl my-2">Try to provide some interesting query.</h2>
                    </div> : 
                    <GptMoviesContainer />
                }
            </div>
        </div>
    );
};

export default Search;