import { LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="w-full bg-gradient-to-b from-black">
            
            <img className="h-20 cursor-pointer" src={LOGO} alt="netflix" />
            
        </div>
    )
};

export default Header;