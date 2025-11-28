import { useEffect, useState } from "react";

const TrailerTitle = (props) => {

    const {title, overview} = props;
    const [hideOverview, setHideOverview] = useState(false);

    const hide = function() {
        setTimeout(()=>{
            setHideOverview(true)
        }, 10000);
    };

    const handleInfo = () => {
        setHideOverview(false);
        hide();
    };

    useEffect(()=>{
        hide();
    }, []);

    return (
        <div className="w-[40%] absolute p-4 text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl italic">{title}</h1>
            <p className="text-xs text-justify my-2">{ !hideOverview ? overview : ''}</p>
            <div className="mt-4">
                <button className="bg-white text-black text-xl px-2 py-1 mx-1 rounded hover:bg-opacity-80">Play⏵</button>
                <button className="bg-gray-700 text-white text-xl px-2 py-1 mx-1 rounded hover:bg-opacity-50" onClick={handleInfo}>ⓘ More Info</button>
            </div>
        </div>
    )
};

export default TrailerTitle;