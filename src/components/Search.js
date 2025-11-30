import { useRef } from "react";
import openai from "../utils/openAi";

const Search = () => {

    const input = useRef(null);

    const handleSearchForm = async () => {
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

        console.log(gptSearchResults.choices?.[0]?.message?.content);
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
            <div>

            </div>
        </div>
    );
};

export default Search;