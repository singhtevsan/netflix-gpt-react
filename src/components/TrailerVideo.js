import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const TrailerVideo = ({movieId}) => {

    const key =useGetMovieTrailer(movieId);

    return (
        <div className="w-screen">
            <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${key}?playlist=${key}&loop=1&autoplay=1&mute=1&controls=0`}
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
    )
};

export default TrailerVideo;