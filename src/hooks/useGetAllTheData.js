import useGenreMovies from "./useGenreMovies";
import useGenreShows from "./useGenreShows";
import useNowPlayingMovies from "./useNowPlayingMovies";
import useNowPlayingShows from "./useNowPlayingShows";
import usePopularMovies from "./usePopularMovies";
import usePopularShows from "./usePopularShows";
import useTopRatedMovies from "./useTopRatedMovies";
import useTopRatedShows from "./useTopRatedShows";
import useUpcomingMovies from "./useUpcomingMovies";
import useUpcomingShows from "./useUpcomingShows";

const useGetAllTheData = () => {

    useNowPlayingMovies();
    useNowPlayingShows();

    useUpcomingMovies();
    useUpcomingShows();

    usePopularMovies();
    usePopularShows();

    useTopRatedMovies();
    useTopRatedShows();

    useGenreMovies();
    useGenreShows();
};

export default useGetAllTheData;