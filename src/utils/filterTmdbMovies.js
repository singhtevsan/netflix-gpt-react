const filterTmdbMovies = (arrayOfArrays,gptSearchResults) => {
    
    let actualMovies = [];
    const languages = ['en','hi','te','ta','ml','pa','bn'];

    arrayOfArrays.forEach((array)=>{
        const data = array.filter((object)=>{
            return (
                gptSearchResults.includes(object?.original_title) && 
                languages.includes(object?.original_language)
            );
        });
        actualMovies.push(...data);
    });
    return actualMovies;
};

export default filterTmdbMovies;