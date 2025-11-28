import useNowPlayingMovies from "./useNowPlayingMovies";
import useNowPlayingShows from "./useNowPlayingShows";

const useGetAllTheData = () => {

    useNowPlayingMovies();
    useNowPlayingShows();
};

export default useGetAllTheData;