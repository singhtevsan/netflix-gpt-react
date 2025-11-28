import useNowPlayingMovies from "./useNowPlayingMovies";
import useNowPlayingShows from "./useNowPlayingShows";
import useUpcomingMovies from "./useUpcomingMovies";
import useUpcomingShows from "./useUpcomingShows";

const useGetAllTheData = () => {

    useNowPlayingMovies();
    useNowPlayingShows();

    useUpcomingMovies();
    useUpcomingShows();

};

export default useGetAllTheData;