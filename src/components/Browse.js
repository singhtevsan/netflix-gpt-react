import { useSelector } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import TrailerContainer from "./TrailerContainer";
import useGetAllTheData from "../hooks/useGetAllTheData";
import ShowsTrailerContainer from "./ShowsTrailerContainer";


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

    useGetAllTheData();

    const page = useSelector((store)=>store.view.page);

    if(page!==2){

        if(page===0) {
            return(
                <div>
                    <TrailerContainer />
                    <MoviesContainer />
                </div>
            )
        }
        if(page===1){
            return(
                <div>
                    <ShowsTrailerContainer />
                </div>
            )
        }
    }
    else{
        return(
            <div>
                GPT
            </div>
        )
    }
        
};

export default Browse;