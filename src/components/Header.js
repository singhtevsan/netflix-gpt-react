import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleView } from "../utils/changeViewSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector( (store)=>store.user );

    const handleSignOut = () => {
        
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            navigate("/error");

        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email, displayName, photoURL} = user;

                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                    })
                );
                navigate("/browse");

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // unsubscribe when components unmounts
        return () => {
            unsubscribe();
        };

    }, []);


    const handleViewToggle = (value) => {
        dispatch(toggleView(value))
    }

    return (
        <div className="w-full bg-gradient-to-b from-black flex items-center absolute z-10">
            
            <img className="h-20 cursor-pointer" src={LOGO} alt="netflix" onClick={()=>handleViewToggle(0)}/>
        
            {
                user ? 
                <div className="w-full flex justify-between">
                    <div className="text-gray-400">
                        <button className="text-lg mx-2 hover:text-white focus:text-white" onClick={()=>handleViewToggle(0)}>Movies</button>
                        <button className="text-lg mx-2 hover:text-white focus:text-white" onClick={()=>handleViewToggle(1)}>Shows</button>
                        <button className="text-lg mx-2 hover:text-white focus:text-white" onClick={()=>handleViewToggle(2)}>GPT</button>
                    </div>
                    <div className="mx-3 cursor-pointer" onClick={handleSignOut}>
                        <img src={user?.photoURL} alt="user" title="sign out" className="border-2 rounded" />
                    </div>
                </div> : ''
            }
            
        </div>
    )
};

export default Header;