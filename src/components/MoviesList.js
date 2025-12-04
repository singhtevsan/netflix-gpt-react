import MovieCard from "./MovieCard";

const MoviesList = (props) => {

    const {list, title} = props;

    return(
        <div>
            <h1 className="font-bold text-white px-4">{title}</h1>
            <div className="flex p-2 scroll">
                <div className="flex">
                    {
                        list.map((item) => {
                            return item?.poster_path && <MovieCard movie={item}  key={item?.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default MoviesList;