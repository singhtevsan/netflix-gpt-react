const GenreList = (props) => {

    const {list, title} = props;

    return(
        <div>
            <h1 className="font-bold text-white px-4">{title}</h1>
            <div className="flex p-2 scroll">
                <div className="flex">
                    {
                        list.map((item)=>{
                            return (
                                <div key={item?.id} className="w-40 h-24 bg-sky-950 flex justify-center items-center 
                                rounded-md mx-1 hover:scale-105 transition-all duration-500 cursor-pointer ">
                                    <span className="text-white font-bold">{item?.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

};

export default GenreList;